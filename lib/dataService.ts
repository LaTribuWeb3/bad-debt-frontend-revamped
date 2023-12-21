import GetGithubData from '@/app/badDebtTable/GithubService';
import SimpleCacheService from './cacheService';
import { ProtocolResult } from '@/app/badDebtTable/ProtocolResult.type';
// import env data with vite
// const apiUrl: string = import.meta.env.VITE_API_URL as string;

// good typing with axios
// const response: AxiosResponse<number[]> = await axios.get(url);
// console.log(`found ${response.data.length} overview data`);
// return response.data;

export default class DataService {
    /**
     * get the protocol data from cache or github
     * @param dateStr Should be in the correct format d.m.yyyy or latest. Ex: 1.2.2023 for february the 1st, 2023
     * @returns
     */
    static async GetProtocolResults(dateStr = 'latest'): Promise<ProtocolResult[]> {
        const protocolResults = await SimpleCacheService.GetAndCache(
            `GetProtocolResults-${dateStr}`,
            () => GetGithubData(dateStr),
            15 * 60 * 1000
        );

        return protocolResults;
    }
}