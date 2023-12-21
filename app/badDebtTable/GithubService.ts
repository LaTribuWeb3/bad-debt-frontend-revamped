import { capitalizeFirstLetter, getToday, normalize } from "@/lib/utils";
import { ProtocolResult } from "./ProtocolResult.type";
import { DataFileContent, GithubRecursiveResponse, Tree } from "./GithubApiModel";


export async function GetGithubData(dateStr: string): Promise<ProtocolResult[]> {
  if (dateStr != 'latest') {
    const [day, month, year] = dateStr.split('.').map((_) => Number(_));
    const today = getToday();
    if (today.day == day && today.month == month && today.year == year) {
      dateStr = 'latest';
    }
  }


  let headDirectory = 'bad-debt';
  const urlParams = new URLSearchParams(window.location.search);
  const staging = urlParams.get('staging');

  if (staging && staging.toLowerCase() === 'true') {
    headDirectory = 'bad-debt-staging';
  }
  console.log('getFileNames: loading files from github');
  const dirToGet = headDirectory + '/' + dateStr + '/';
  const response = await fetch('https://api.github.com/repos/Risk-DAO/simulation-results/git/trees/main?recursive=1');
  if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const allDirs: GithubRecursiveResponse = await response.json();
  
  const loadedFiles = allDirs.tree
    .filter((_) => _.path.startsWith(dirToGet))
    .map((_) => _.path.split('/').slice(-1)[0]);


    //// TO BE CONTINUED
  console.log('loadedFiles: ', loadedFiles.length);

  // load all the raw files
  const filePromises: Promise<DataFileContent>[] = [];
  for (const filename of loadedFiles) {
    filePromises.push(loadJsonFile(headDirectory, dateStr, filename));
  }

  const allFileContent = await Promise.all(filePromises);
  const protocolResults: ProtocolResult[] = [];

  const allProtocols = Array.from(new Set(allFileContent.map((_) => _.name)));
  for (const protocolName of allProtocols) {
    // find all file for that protocol
    const protocolFileContents = allFileContent.filter((_) => _.name == protocolName);
    if (protocolFileContents.length == 1) {
      // only one result, leave subResult empty
      const decimals = Number(protocolFileContents[0].decimals);

      protocolResults.push({
        name: protocolFileContents[0].name,
        chains: [protocolFileContents[0].chain],
        borrows: normalize(protocolFileContents[0].borrows, decimals),
        calculatedBorrows: normalize(protocolFileContents[0].calculatedBorrows, decimals),
        dataFileLink: protocolFileContents[0].link,
        decimals: decimals,
        deposits: normalize(protocolFileContents[0].deposits, decimals),
        total: normalize(protocolFileContents[0].total, decimals),
        tvl: normalize(protocolFileContents[0].tvl, decimals),
        updated: Number(protocolFileContents[0].updated),
        usersWithBadDebtCount: protocolFileContents[0].users.length
      });
    } else {
      const decimals = Number(protocolFileContents[0].decimals);
      const mainResult: ProtocolResult = {
        name: protocolFileContents[0].name,
        chains: [],
        borrows: 0,
        calculatedBorrows: 0,
        dataFileLink: '',
        decimals: decimals,
        deposits: 0,
        total: 0,
        tvl: 0,
        updated: Number.MAX_SAFE_INTEGER,
        usersWithBadDebtCount: 0,
        subResults: []
      };

      for (const fileContent of protocolFileContents) {
        const decimals = Number(fileContent.decimals);
        const subResult: ProtocolResult = {
          name: fileContent.subName || fileContent.chain,
          chains: [fileContent.chain],
          borrows: normalize(fileContent.borrows, decimals),
          calculatedBorrows: normalize(fileContent.calculatedBorrows, decimals),
          dataFileLink: fileContent.link,
          decimals: decimals,
          deposits: normalize(fileContent.deposits, decimals),
          total: normalize(fileContent.total, decimals),
          tvl: normalize(fileContent.tvl, decimals),
          updated: Number(fileContent.updated),
          usersWithBadDebtCount: fileContent.users.length
        };

        mainResult.subResults!.push(subResult);
        if (!mainResult.chains.includes(fileContent.chain)) {
          mainResult.chains.push(fileContent.chain);
        }

        mainResult.borrows += subResult.borrows;
        mainResult.calculatedBorrows += subResult.calculatedBorrows;
        mainResult.deposits += subResult.deposits;
        mainResult.total += subResult.total;
        mainResult.tvl += subResult.tvl;
        mainResult.usersWithBadDebtCount += subResult.usersWithBadDebtCount;
        mainResult.updated = Math.min(mainResult.updated, subResult.updated);
      }

      protocolResults.push(mainResult);
    }
  }

  return protocolResults;
}

async function loadJsonFile(headDirectory: string, dirName: string, filename: string): Promise<DataFileContent> {
  const link = `https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/${headDirectory}/${dirName}/${encodeURIComponent(
    filename
  )}`;
  const axiosResp = await fetch<DataFileContent>(link);

  const dataFileContent = axiosResp.data;

  // analyze the filename as there are 2 possibilities:
  // 1/ "optimism_granary.json", only one underscore. First part is the chain, second part is the name of the protocol. Might still be grouped after if multiple time the same protocol
  // 2/ "subjobBSC_MAI_BNB MAI Vault.json" --> this mean that it's a sub protocol, we will treat it like a protocol result with a subResult

  const splittedFilename = filename.replace('subjob', '').replace('.json', '').split('_');
  const chain = splittedFilename[0];
  const protocolName = capitalizeFirstLetter(splittedFilename[1]);
  const protocolSubName = splittedFilename.length > 2 ? splittedFilename[2] : undefined;

  dataFileContent.name = protocolName;
  dataFileContent.chain = chain;
  dataFileContent.subName = protocolSubName;
  dataFileContent.link = link;

  return dataFileContent;
}