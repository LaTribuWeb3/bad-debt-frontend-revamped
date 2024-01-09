import { ProtocolResult } from '@/app/badDebtTable/ProtocolResult.type';

export const dummyData: ProtocolResult[] = [
  {
    name: 'Maker',
    chains: ['ethereum'],
    borrows: 5280557946.910963,
    dataFileLink:
      'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/ethereum_maker.json',
    decimals: 45,
    deposits: 14438338435.077856,
    totalBadDebt: -1e-18,
    tvl: 14438338435.077856,
    updated: 1704706067,
    usersWithBadDebtCount: 1,
    badDebtRatio: -6.926004709589756e-29
  },
  {
    name: 'Aave v3',
    chains: ['arbitrum', 'avalanche', 'ethereum', 'optimism', 'polygon'],
    borrows: 2431103962.471943,
    dataFileLink: '',
    decimals: 8,
    deposits: 6571291170.6149235,
    totalBadDebt: -350418.66698126,
    tvl: 4140187208.1429806,
    updated: 1704706780,
    usersWithBadDebtCount: 4689,
    subResults: [
      {
        name: 'arbitrum',
        chains: ['arbitrum'],
        borrows: 160992545.83857617,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/arbitrum_aave%20v3.json',
        decimals: 8,
        deposits: 400459029.9429294,
        totalBadDebt: -23770.28705332,
        tvl: 239466484.10435322,
        updated: 1704708586,
        usersWithBadDebtCount: 593,
        badDebtRatio: -0.00009926352383810642
      },
      {
        name: 'avalanche',
        chains: ['avalanche'],
        borrows: 101238245.46098626,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/avalanche_aave%20v3.json',
        decimals: 8,
        deposits: 297835116.32266396,
        totalBadDebt: -298441.89523294,
        tvl: 196596870.8616777,
        updated: 1704706780,
        usersWithBadDebtCount: 3390,
        badDebtRatio: -0.0015180399053396874
      },
      {
        name: 'ethereum',
        chains: ['ethereum'],
        borrows: 2001354982.5498018,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/ethereum_aave%20v3.json',
        decimals: 8,
        deposits: 5390871618.667276,
        totalBadDebt: -34.72795889,
        tvl: 3389516636.1174746,
        updated: 1704708119,
        usersWithBadDebtCount: 22,
        badDebtRatio: -1.0245696545622851e-8
      },
      {
        name: 'optimism',
        chains: ['optimism'],
        borrows: 63099165.71144654,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/optimism_aave%20v3.json',
        decimals: 8,
        deposits: 163769142.75377217,
        totalBadDebt: -860.0605884,
        tvl: 100669977.04232565,
        updated: 1704707165,
        usersWithBadDebtCount: 309,
        badDebtRatio: -0.000008543367284551942
      },
      {
        name: 'polygon',
        chains: ['polygon'],
        borrows: 104419022.91113205,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/polygon_aave%20v3.json',
        decimals: 8,
        deposits: 318356262.9282816,
        totalBadDebt: -27311.69614771,
        tvl: 213937240.01714957,
        updated: 1704708734,
        usersWithBadDebtCount: 375,
        badDebtRatio: -0.00012766218796466034
      }
    ],
    badDebtRatio: 0
  },
  {
    name: 'Aave',
    chains: ['ethereum'],
    borrows: 1342038737.6139963,
    dataFileLink:
      'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/ethereum_aave.json',
    decimals: 18,
    deposits: 4097644557.8869214,
    totalBadDebt: -498999.39278382435,
    tvl: 2336247836.2775693,
    updated: 1704708167,
    usersWithBadDebtCount: 1858,
    badDebtRatio: -0.0002135900930694488
  },
  {
    name: 'Compound',
    chains: ['ethereum'],
    borrows: 434624421.0779301,
    dataFileLink:
      'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/ethereum_compound.json',
    decimals: 18,
    deposits: 1217046868.0154457,
    totalBadDebt: -72843.333974654,
    tvl: 1122296547.327967,
    updated: 1704709139,
    usersWithBadDebtCount: 959,
    badDebtRatio: -0.00006490560284452796
  },
  {
    name: 'Compound v3',
    chains: ['ethereum'],
    borrows: 439517978.89636284,
    dataFileLink: '',
    decimals: 18,
    deposits: 963706294.9634959,
    totalBadDebt: 0,
    tvl: 1039000561.1352838,
    updated: 1704706547,
    usersWithBadDebtCount: 0,
    subResults: [
      {
        name: 'USDC',
        chains: ['ethereum'],
        borrows: 377207489.3030504,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/ethereum_compound%20v3_USDC.json',
        decimals: 18,
        deposits: 889026035.3563595,
        totalBadDebt: 0,
        tvl: 922483914.8720851,
        updated: 1704706547,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'WETH',
        chains: ['ethereum'],
        borrows: 62310489.59331242,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/ethereum_compound%20v3_WETH.json',
        decimals: 18,
        deposits: 74680259.6071364,
        totalBadDebt: 0,
        tvl: 116516646.26319876,
        updated: 1704709415,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      }
    ],
    badDebtRatio: 0
  },
  {
    name: 'Morpho',
    chains: ['ethereum'],
    borrows: 269542303.1673268,
    dataFileLink: '',
    decimals: 18,
    deposits: 658051333.4954041,
    totalBadDebt: 735.0723067446112,
    tvl: 388509030.3280774,
    updated: 1704706679,
    usersWithBadDebtCount: 38,
    subResults: [
      {
        name: 'Aave',
        chains: ['ethereum'],
        borrows: 257982879.87180334,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_Morpho_Aave.json',
        decimals: 18,
        deposits: 618508684.9209701,
        totalBadDebt: 480.33427952116915,
        tvl: 360525805.0491668,
        updated: 1704706679,
        usersWithBadDebtCount: 17,
        badDebtRatio: 0.0000013323159474137043
      },
      {
        name: 'Compound',
        chains: ['ethereum'],
        borrows: 11559423.295523444,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_Morpho_Compound.json',
        decimals: 18,
        deposits: 39542648.57443405,
        totalBadDebt: 254.73802722344203,
        tvl: 27983225.278910603,
        updated: 1704706907,
        usersWithBadDebtCount: 21,
        badDebtRatio: 0.000009103240412227389
      }
    ],
    badDebtRatio: 0
  },
  {
    name: 'Benqi',
    chains: ['avalanche'],
    borrows: 78637588.95766623,
    dataFileLink:
      'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/avalanche_benqi.json',
    decimals: 18,
    deposits: 225701955.5767471,
    totalBadDebt: -1541.6975849093635,
    tvl: 230416423.44702676,
    updated: 1704707392,
    usersWithBadDebtCount: 747,
    badDebtRatio: -0.000006690918823604617
  },
  {
    name: 'Tectonic',
    chains: ['CRO'],
    borrows: 77259428.14602144,
    dataFileLink:
      'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/CRO_tectonic.json',
    decimals: 18,
    deposits: 197072873.7094486,
    totalBadDebt: -9553.176313167702,
    tvl: 123089458.85242996,
    updated: 1704708513,
    usersWithBadDebtCount: 1698,
    badDebtRatio: -0.00007761165255118114
  },
  {
    name: 'MIM',
    chains: ['BSC', 'FTM', 'arbitrum', 'avalanche', 'ethereum'],
    borrows: 27050994.033279154,
    dataFileLink: '',
    decimals: 18,
    deposits: 99187948.85986361,
    totalBadDebt: -65470.62247160394,
    tvl: 99187948.85986361,
    updated: 1704702275,
    usersWithBadDebtCount: 2623,
    subResults: [
      {
        name: 'BNB',
        chains: ['BSC'],
        borrows: 176575.11404297964,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobBSC_MIM_BNB.json',
        decimals: 18,
        deposits: 334653.25417343405,
        totalBadDebt: -19.270866245152003,
        tvl: 334653.25417343405,
        updated: 1704703747,
        usersWithBadDebtCount: 56,
        badDebtRatio: -0.00005758457748378827
      },
      {
        name: 'CAKE',
        chains: ['BSC'],
        borrows: 231.7641179819322,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobBSC_MIM_CAKE.json',
        decimals: 18,
        deposits: 4307.890169143937,
        totalBadDebt: -43.61265536509698,
        tvl: 4307.890169143937,
        updated: 1704703702,
        usersWithBadDebtCount: 42,
        badDebtRatio: -0.010123901411758526
      },
      {
        name: 'FTM+MIM Spirit',
        chains: ['FTM'],
        borrows: 46461.770074881104,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobFTM_MIM_FTM%2BMIM%20Spirit.json',
        decimals: 18,
        deposits: 43558.55050956708,
        totalBadDebt: -4987.462468432547,
        tvl: 43558.55050956708,
        updated: 1704706103,
        usersWithBadDebtCount: 4,
        badDebtRatio: -0.11450019364939874
      },
      {
        name: 'FTM+MIM Spooky',
        chains: ['FTM'],
        borrows: 7628.686496270805,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobFTM_MIM_FTM%2BMIM%20Spooky.json',
        decimals: 18,
        deposits: 8840.448471798993,
        totalBadDebt: -3532.0839683125573,
        tvl: 8840.448471798993,
        updated: 1704705960,
        usersWithBadDebtCount: 13,
        badDebtRatio: -0.39953674065064637
      },
      {
        name: 'wFTM (1.8% interest)',
        chains: ['FTM'],
        borrows: 6082.730246894546,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobFTM_MIM_wFTM%20(1.8%25%20interest).json',
        decimals: 18,
        deposits: 37654.77954888488,
        totalBadDebt: -7.6634960347292695,
        tvl: 37654.77954888488,
        updated: 1704706309,
        usersWithBadDebtCount: 56,
        badDebtRatio: -0.00020351987520681738
      },
      {
        name: 'wFTM (3.5% interest)',
        chains: ['FTM'],
        borrows: 3539.149159596481,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobFTM_MIM_wFTM%20(3.5%25%20interest).json',
        decimals: 18,
        deposits: 19170.08278445686,
        totalBadDebt: -302.9453451710634,
        tvl: 19170.08278445686,
        updated: 1704706457,
        usersWithBadDebtCount: 75,
        badDebtRatio: -0.0158030274870118
      },
      {
        name: 'xBOO',
        chains: ['FTM'],
        borrows: 12961.217406615611,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobFTM_MIM_xBOO.json',
        decimals: 18,
        deposits: 29033.51435948534,
        totalBadDebt: -5.632668432769922,
        tvl: 29033.51435948534,
        updated: 1704703620,
        usersWithBadDebtCount: 7,
        badDebtRatio: -0.0001940057398159831
      },
      {
        name: 'yvWFTM',
        chains: ['FTM'],
        borrows: 81944.28018116164,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobFTM_MIM_yvWFTM.json',
        decimals: 18,
        deposits: 304204.8404834123,
        totalBadDebt: -176.41513925972075,
        tvl: 304204.8404834123,
        updated: 1704703126,
        usersWithBadDebtCount: 166,
        badDebtRatio: -0.0005799221964363855
      },
      {
        name: 'ETH',
        chains: ['arbitrum'],
        borrows: 1298145.1985014074,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobarbitrum_MIM_ETH.json',
        decimals: 18,
        deposits: 4161055.854689757,
        totalBadDebt: -22.303865631519194,
        tvl: 4161055.854689757,
        updated: 1704703777,
        usersWithBadDebtCount: 133,
        badDebtRatio: -0.000005360145696285575
      },
      {
        name: 'AVAX',
        chains: ['avalanche'],
        borrows: 48134.40212659524,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobavalanche_MIM_AVAX.json',
        decimals: 18,
        deposits: 213564.2784902471,
        totalBadDebt: -419.1393670499227,
        tvl: 213564.2784902471,
        updated: 1704706865,
        usersWithBadDebtCount: 178,
        badDebtRatio: -0.0019625911693329544
      },
      {
        name: 'MIM+AVAX JLP',
        chains: ['avalanche'],
        borrows: 1889.0842510282703,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobavalanche_MIM_MIM%2BAVAX%20JLP.json',
        decimals: 18,
        deposits: 12137.842552538956,
        totalBadDebt: -1300.4117245191037,
        tvl: 12137.842552538956,
        updated: 1704707896,
        usersWithBadDebtCount: 11,
        badDebtRatio: -0.1071369742102222
      },
      {
        name: 'MIM+AVAX SLP',
        chains: ['avalanche'],
        borrows: 570.2731320931306,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobavalanche_MIM_MIM%2BAVAX%20SLP.json',
        decimals: 18,
        deposits: 2390.3821534925646,
        totalBadDebt: -37.03427153248992,
        tvl: 2390.3821534925646,
        updated: 1704704013,
        usersWithBadDebtCount: 3,
        badDebtRatio: -0.015493033814019862
      },
      {
        name: 'USDC+AVAX JLP',
        chains: ['avalanche'],
        borrows: 63.05573882407952,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobavalanche_MIM_USDC%2BAVAX%20JLP.json',
        decimals: 18,
        deposits: 6070.549373532528,
        totalBadDebt: -26.081116685209732,
        tvl: 6070.549373532528,
        updated: 1704707348,
        usersWithBadDebtCount: 6,
        badDebtRatio: -0.004296335484712944
      },
      {
        name: 'USDT+AVAX JLP',
        chains: ['avalanche'],
        borrows: 18.806751705312866,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobavalanche_MIM_USDT%2BAVAX%20JLP.json',
        decimals: 18,
        deposits: 907.1788863484837,
        totalBadDebt: -3.9809118666720584,
        tvl: 907.1788863484837,
        updated: 1704703879,
        usersWithBadDebtCount: 2,
        badDebtRatio: -0.004388232493698967
      },
      {
        name: 'wMEMO (deprecated)',
        chains: ['avalanche'],
        borrows: 14.100528900338581,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobavalanche_MIM_wMEMO%20(deprecated).json',
        decimals: 18,
        deposits: 4390.367559510199,
        totalBadDebt: -13.215919448477385,
        tvl: 4390.367559510199,
        updated: 1704702907,
        usersWithBadDebtCount: 34,
        badDebtRatio: -0.0030102079767443863
      },
      {
        name: 'wMEMO',
        chains: ['avalanche'],
        borrows: 37765.55199314906,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobavalanche_MIM_wMEMO.json',
        decimals: 18,
        deposits: 10360.693002461894,
        totalBadDebt: -37697.43001659879,
        tvl: 10360.693002461894,
        updated: 1704704685,
        usersWithBadDebtCount: 1089,
        badDebtRatio: -3.6385046837736796
      },
      {
        name: 'xJOE',
        chains: ['avalanche'],
        borrows: 251.4898870674001,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobavalanche_MIM_xJOE.json',
        decimals: 18,
        deposits: 64781.9310378863,
        totalBadDebt: -162.11973186575062,
        tvl: 64781.9310378863,
        updated: 1704705225,
        usersWithBadDebtCount: 26,
        badDebtRatio: -0.002502545528797813
      },
      {
        name: 'ALCX',
        chains: ['ethereum'],
        borrows: 478.53320622697396,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_ALCX.json',
        decimals: 18,
        deposits: 5245.408970096873,
        totalBadDebt: -344.9289778353616,
        tvl: 5245.408970096873,
        updated: 1704705959,
        usersWithBadDebtCount: 13,
        badDebtRatio: -0.06575826209200068
      },
      {
        name: 'ALGD',
        chains: ['ethereum'],
        borrows: 103.13032814664804,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_ALGD.json',
        decimals: 18,
        deposits: 7047.462425462528,
        totalBadDebt: 0,
        tvl: 7047.462425462528,
        updated: 1704705911,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'FTM',
        chains: ['ethereum'],
        borrows: 275.912068734624,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_FTM.json',
        decimals: 18,
        deposits: 3365.890140094291,
        totalBadDebt: -230.38001078759686,
        tvl: 3365.890140094291,
        updated: 1704702827,
        usersWithBadDebtCount: 12,
        badDebtRatio: -0.06844549322728134
      },
      {
        name: 'FTT',
        chains: ['ethereum'],
        borrows: 35468.28251741508,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_FTT.json',
        decimals: 18,
        deposits: 385745.2096586654,
        totalBadDebt: -543.8036688650119,
        tvl: 385745.2096586654,
        updated: 1704705971,
        usersWithBadDebtCount: 15,
        badDebtRatio: -0.0014097483397038366
      },
      {
        name: 'SHIB',
        chains: ['ethereum'],
        borrows: 5297.1311877229955,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_SHIB.json',
        decimals: 18,
        deposits: 15977.833980137711,
        totalBadDebt: -265.2960024194189,
        tvl: 15977.833980137711,
        updated: 1704703055,
        usersWithBadDebtCount: 8,
        badDebtRatio: -0.016604002942402107
      },
      {
        name: 'SPELL (DegenBox)',
        chains: ['ethereum'],
        borrows: 2850.0133415712617,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_SPELL%20(DegenBox).json',
        decimals: 18,
        deposits: 10871.48279709069,
        totalBadDebt: -1010.9145232946016,
        tvl: 10871.48279709069,
        updated: 1704703847,
        usersWithBadDebtCount: 54,
        badDebtRatio: -0.09298773149557223
      },
      {
        name: 'UST (Degenbox)',
        chains: ['ethereum'],
        borrows: 902.1603461490567,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_UST%20(Degenbox).json',
        decimals: 18,
        deposits: 1854.4866624717954,
        totalBadDebt: -875.555652283364,
        tvl: 1854.4866624717954,
        updated: 1704706535,
        usersWithBadDebtCount: 28,
        badDebtRatio: -0.4721283091442456
      },
      {
        name: 'UST V2 (Degenbox)',
        chains: ['ethereum'],
        borrows: 5351.4039567432565,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_UST%20V2%20(Degenbox).json',
        decimals: 18,
        deposits: 30768.99287561412,
        totalBadDebt: -5214.318617745743,
        tvl: 30768.99287561412,
        updated: 1704707087,
        usersWithBadDebtCount: 147,
        badDebtRatio: -0.16946666531546883
      },
      {
        name: 'WBTC',
        chains: ['ethereum'],
        borrows: 89695.64048412693,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_WBTC.json',
        decimals: 18,
        deposits: 419989.4953886693,
        totalBadDebt: 0,
        tvl: 419989.4953886693,
        updated: 1704705995,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'WETH',
        chains: ['ethereum'],
        borrows: 328463.9153346925,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_WETH.json',
        decimals: 18,
        deposits: 930808.5604156968,
        totalBadDebt: -856.3293476352736,
        tvl: 930808.5604156968,
        updated: 1704702575,
        usersWithBadDebtCount: 30,
        badDebtRatio: -0.0009199843921212317
      },
      {
        name: 'cvx3pool (new)',
        chains: ['ethereum'],
        borrows: 195.52556849755987,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_cvx3pool%20(new).json',
        decimals: 18,
        deposits: 317.0998743191969,
        totalBadDebt: 0,
        tvl: 317.0998743191969,
        updated: 1704702275,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'cvx3pool (non deprecated)',
        chains: ['ethereum'],
        borrows: 153289.962120214,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_cvx3pool%20(non%20deprecated).json',
        decimals: 18,
        deposits: 287250.8142959888,
        totalBadDebt: 0,
        tvl: 287250.8142959888,
        updated: 1704706307,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'cvx3pool (old)',
        chains: ['ethereum'],
        borrows: 78639.3353717438,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_cvx3pool%20(old).json',
        decimals: 18,
        deposits: 244547.6904248921,
        totalBadDebt: 0,
        tvl: 244547.6904248921,
        updated: 1704703367,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'cvxrenCrv',
        chains: ['ethereum'],
        borrows: 174.91383662766887,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_cvxrenCrv.json',
        decimals: 18,
        deposits: 1.86627791636e-7,
        totalBadDebt: -174.9138366272601,
        tvl: 1.86627791636e-7,
        updated: 1704705959,
        usersWithBadDebtCount: 14,
        badDebtRatio: -937233597.9220777
      },
      {
        name: 'cvxtricrypto2',
        chains: ['ethereum'],
        borrows: 11522784.780126179,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_cvxtricrypto2.json',
        decimals: 18,
        deposits: 25936660.412388656,
        totalBadDebt: -327.2258830913048,
        tvl: 25936660.412388656,
        updated: 1704702539,
        usersWithBadDebtCount: 23,
        badDebtRatio: -0.000012616346047967117
      },
      {
        name: 'sSPELL (New)',
        chains: ['ethereum'],
        borrows: 51626.59731475478,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_sSPELL%20(New).json',
        decimals: 18,
        deposits: 196370.40753311853,
        totalBadDebt: -1757.9725360255666,
        tvl: 196370.40753311853,
        updated: 1704707975,
        usersWithBadDebtCount: 92,
        badDebtRatio: -0.008952329213499638
      },
      {
        name: 'sSPELL',
        chains: ['ethereum'],
        borrows: 1022.0780042619451,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_sSPELL.json',
        decimals: 18,
        deposits: 3293.288712117669,
        totalBadDebt: -752.8084357024222,
        tvl: 3293.288712117669,
        updated: 1704706427,
        usersWithBadDebtCount: 48,
        badDebtRatio: -0.22858865453625749
      },
      {
        name: 'wsOHM',
        chains: ['ethereum'],
        borrows: 7180.463633425914,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_wsOHM.json',
        decimals: 18,
        deposits: 23751.000960664103,
        totalBadDebt: -1056.3148365251973,
        tvl: 23751.000960664103,
        updated: 1704706595,
        usersWithBadDebtCount: 80,
        badDebtRatio: -0.04447453975833032
      },
      {
        name: 'xSUSHI',
        chains: ['ethereum'],
        borrows: 11351.604866050595,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_xSUSHI.json',
        decimals: 18,
        deposits: 45472.976601805654,
        totalBadDebt: -1396.8778725516088,
        tvl: 45472.976601805654,
        updated: 1704704663,
        usersWithBadDebtCount: 69,
        badDebtRatio: -0.03071885715297866
      },
      {
        name: 'xSUSHI2',
        chains: ['ethereum'],
        borrows: 1.528669488776058,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_xSUSHI2.json',
        decimals: 18,
        deposits: 2736.8035010930594,
        totalBadDebt: -0.0860085196825221,
        tvl: 2736.8035010930594,
        updated: 1704706451,
        usersWithBadDebtCount: 2,
        badDebtRatio: -0.00003142663316828224
      },
      {
        name: 'yvCVXETH',
        chains: ['ethereum'],
        borrows: 17138.101539474337,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_yvCVXETH.json',
        decimals: 18,
        deposits: 49459.57796976662,
        totalBadDebt: 0,
        tvl: 49459.57796976662,
        updated: 1704702947,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'yvDAI',
        chains: ['ethereum'],
        borrows: 752987.8721428568,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_yvDAI.json',
        decimals: 18,
        deposits: 833841.8593176197,
        totalBadDebt: 0,
        tvl: 833841.8593176197,
        updated: 1704706199,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'yvUSDC v2',
        chains: ['ethereum'],
        borrows: 234579.08159119773,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_yvUSDC%20v2.json',
        decimals: 18,
        deposits: 365362.009872453,
        totalBadDebt: 0,
        tvl: 365362.009872453,
        updated: 1704703511,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'yvUSDT v2',
        chains: ['ethereum'],
        borrows: 329799.1486647125,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_yvUSDT%20v2.json',
        decimals: 18,
        deposits: 485846.1366736562,
        totalBadDebt: 0,
        tvl: 485846.1366736562,
        updated: 1704706283,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'yvWETH v2',
        chains: ['ethereum'],
        borrows: 11116548.949448336,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_yvWETH%20v2.json',
        decimals: 18,
        deposits: 62834395.547898844,
        totalBadDebt: -306.45187767638237,
        tvl: 62834395.547898844,
        updated: 1704706451,
        usersWithBadDebtCount: 20,
        badDebtRatio: -0.000004877135763051515
      },
      {
        name: 'yvWETH',
        chains: ['ethereum'],
        borrows: 21.71547129389291,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_yvWETH.json',
        decimals: 18,
        deposits: 1483.820272358729,
        totalBadDebt: 0,
        tvl: 1483.820272358729,
        updated: 1704702971,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'yvYFI',
        chains: ['ethereum'],
        borrows: 1085.4734741969228,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_yvYFI.json',
        decimals: 18,
        deposits: 1763.273720321289,
        totalBadDebt: -964.3371951027118,
        tvl: 1763.273720321289,
        updated: 1704703307,
        usersWithBadDebtCount: 10,
        badDebtRatio: -0.5469015865143152
      },
      {
        name: 'yvcrvIB',
        chains: ['ethereum'],
        borrows: 580768.8003706938,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_yvcrvIB.json',
        decimals: 18,
        deposits: 806638.8782856662,
        totalBadDebt: 0,
        tvl: 806638.8782856662,
        updated: 1704703283,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'yvstETH',
        chains: ['ethereum'],
        borrows: 635.3036564646844,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MIM_yvstETH.json',
        decimals: 18,
        deposits: 1.29127949189e-7,
        totalBadDebt: -635.3036564638658,
        tvl: 1.29127949189e-7,
        updated: 1704704267,
        usersWithBadDebtCount: 57,
        badDebtRatio: -4919954668.636411
      }
    ],
    badDebtRatio: 0
  },
  {
    name: 'Iron-bank',
    chains: ['ethereum'],
    borrows: 57634718.01916864,
    dataFileLink:
      'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/ethereum_iron-bank.json',
    decimals: 18,
    deposits: 29501644.26490242,
    totalBadDebt: -42843142.36115166,
    tvl: 42503304.762375824,
    updated: 1704623807,
    usersWithBadDebtCount: 104,
    badDebtRatio: -1.0079955570672863
  },
  {
    name: 'Sonne',
    chains: ['optimism'],
    borrows: 34151069.081903495,
    dataFileLink:
      'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/optimism_sonne.json',
    decimals: 18,
    deposits: 67165896.14080144,
    totalBadDebt: -418.7311557913963,
    tvl: 35083109.3835907,
    updated: 1704708525,
    usersWithBadDebtCount: 25,
    badDebtRatio: -0.000011935406044347027
  },
  {
    name: 'MAI',
    chains: [
      'BSC',
      'FTM',
      'arbitrum',
      'avalanche',
      'ethereum',
      'gnosis',
      'harmony',
      'metis',
      'moonriver',
      'optimism',
      'polygon'
    ],
    borrows: 9984582.856488004,
    dataFileLink: '',
    decimals: 18,
    deposits: 33377365.706406936,
    totalBadDebt: -25145.357866528222,
    tvl: 33377365.706406936,
    updated: 1704269609,
    usersWithBadDebtCount: 104,
    subResults: [
      {
        name: 'BNB MAI Vault',
        chains: ['BSC'],
        borrows: 15902.274356185932,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobBSC_MAI_BNB%20MAI%20Vault.json',
        decimals: 18,
        deposits: 51409.35982577504,
        totalBadDebt: 0,
        tvl: 51409.35982577504,
        updated: 1704270497,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Cake MAI Vault',
        chains: ['BSC'],
        borrows: 105.46589481879991,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobBSC_MAI_Cake%20MAI%20Vault.json',
        decimals: 18,
        deposits: 1110.0251669050658,
        totalBadDebt: 0,
        tvl: 1110.0251669050658,
        updated: 1704270497,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'DODO MAI Vault',
        chains: ['BSC'],
        borrows: 84.75,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobBSC_MAI_DODO%20MAI%20Vault.json',
        decimals: 18,
        deposits: 3146.371879427778,
        totalBadDebt: 0,
        tvl: 3146.371879427778,
        updated: 1704270497,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Aave MAI Vault',
        chains: ['FTM'],
        borrows: 3.964417470737862,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobFTM_MAI_Aave%20MAI%20Vault.json',
        decimals: 18,
        deposits: 669.9570707661852,
        totalBadDebt: 0,
        tvl: 669.9570707661852,
        updated: 1704270054,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Bitcoin MAI Vault',
        chains: ['FTM'],
        borrows: 1004565.9916376868,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobFTM_MAI_Bitcoin%20MAI%20Vault.json',
        decimals: 18,
        deposits: 3097621.6095221457,
        totalBadDebt: 0,
        tvl: 3097621.6095221457,
        updated: 1704269987,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'ETH MAI Vault',
        chains: ['FTM'],
        borrows: 4391.290180193558,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobFTM_MAI_ETH%20MAI%20Vault.json',
        decimals: 18,
        deposits: 15670.991193263055,
        totalBadDebt: 0,
        tvl: 15670.991193263055,
        updated: 1704269849,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Fantom MAI Vault',
        chains: ['FTM'],
        borrows: 16704.395405586172,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobFTM_MAI_Fantom%20MAI%20Vault.json',
        decimals: 18,
        deposits: 56480.47071682431,
        totalBadDebt: 0,
        tvl: 56480.47071682431,
        updated: 1704269803,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Link MAI Vault',
        chains: ['FTM'],
        borrows: 17387.74458772723,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobFTM_MAI_Link%20MAI%20Vault.json',
        decimals: 18,
        deposits: 108983.11130264953,
        totalBadDebt: 0,
        tvl: 108983.11130264953,
        updated: 1704270022,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Moo BIFI MAI Vault',
        chains: ['FTM'],
        borrows: 1.2032003213334759,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobFTM_MAI_Moo%20BIFI%20MAI%20Vault.json',
        decimals: 18,
        deposits: 0,
        totalBadDebt: -1.2032003213334759,
        tvl: 0,
        updated: 1704270244,
        usersWithBadDebtCount: 15,
        badDebtRatio: null
      },
      {
        name: 'Moo Boo BTC-FTM MAI Vault',
        chains: ['FTM'],
        borrows: 25.83672179801774,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobFTM_MAI_Moo%20Boo%20BTC-FTM%20MAI%20Vault.json',
        decimals: 18,
        deposits: 249.08603131793078,
        totalBadDebt: -14.980566531239102,
        tvl: 249.08603131793078,
        updated: 1704270207,
        usersWithBadDebtCount: 1,
        badDebtRatio: -0.06014213824828284
      },
      {
        name: 'Moo Boo ETH-FTM MAI Vault',
        chains: ['FTM'],
        borrows: 25.017428056799005,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobFTM_MAI_Moo%20Boo%20ETH-FTM%20MAI%20Vault.json',
        decimals: 18,
        deposits: 131.96979954092154,
        totalBadDebt: -23.08689439050027,
        tvl: 131.96979954092154,
        updated: 1704270208,
        usersWithBadDebtCount: 1,
        badDebtRatio: -0.17494074000878834
      },
      {
        name: 'Moo Scream BTC MAI Vault',
        chains: ['FTM'],
        borrows: 71518.42588975375,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobFTM_MAI_Moo%20Scream%20BTC%20MAI%20Vault.json',
        decimals: 18,
        deposits: 333854.1352050519,
        totalBadDebt: 0,
        tvl: 333854.1352050519,
        updated: 1704270128,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Moo Scream DAI MAI Vault',
        chains: ['FTM'],
        borrows: 29797.098381410146,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobFTM_MAI_Moo%20Scream%20DAI%20MAI%20Vault.json',
        decimals: 18,
        deposits: 50649.396153414214,
        totalBadDebt: 0,
        tvl: 50649.396153414214,
        updated: 1704270172,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Moo Scream FTM MAI Vault',
        chains: ['FTM'],
        borrows: 1953.8634829268922,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobFTM_MAI_Moo%20Scream%20FTM%20MAI%20Vault.json',
        decimals: 18,
        deposits: 9163.403050163895,
        totalBadDebt: 0,
        tvl: 9163.403050163895,
        updated: 1704270070,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Moo Scream LINK MAI Vault',
        chains: ['FTM'],
        borrows: 26907.059414463274,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobFTM_MAI_Moo%20Scream%20LINK%20MAI%20Vault.json',
        decimals: 18,
        deposits: 147918.6145263161,
        totalBadDebt: 0,
        tvl: 147918.6145263161,
        updated: 1704270142,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Moo Scream WETH MAI Vault',
        chains: ['FTM'],
        borrows: 21812.251677148728,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobFTM_MAI_Moo%20Scream%20WETH%20MAI%20Vault.json',
        decimals: 18,
        deposits: 99096.06539964688,
        totalBadDebt: 0,
        tvl: 99096.06539964688,
        updated: 1704270080,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Staked SpookySwap MAI Vault',
        chains: ['FTM'],
        borrows: 442.5560069919806,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobFTM_MAI_Staked%20SpookySwap%20MAI%20Vault.json',
        decimals: 18,
        deposits: 4903.114147010178,
        totalBadDebt: 0,
        tvl: 4903.114147010178,
        updated: 1704270255,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Sushi MAI Vault',
        chains: ['FTM'],
        borrows: 0,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobFTM_MAI_Sushi%20MAI%20Vault.json',
        decimals: 18,
        deposits: 649.8684893140697,
        totalBadDebt: 0,
        tvl: 649.8684893140697,
        updated: 1704270040,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'yvBTC MAI Vault',
        chains: ['FTM'],
        borrows: 137039.0757953986,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobFTM_MAI_yvBTC%20MAI%20Vault.json',
        decimals: 18,
        deposits: 564373.3542645648,
        totalBadDebt: 0,
        tvl: 564373.3542645648,
        updated: 1704269906,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'yvDAI MAI Vault',
        chains: ['FTM'],
        borrows: 244035.82449617487,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobFTM_MAI_yvDAI%20MAI%20Vault.json',
        decimals: 18,
        deposits: 321912.34206472145,
        totalBadDebt: -1.5831326582235814,
        tvl: 321912.34206472145,
        updated: 1704269891,
        usersWithBadDebtCount: 1,
        badDebtRatio: -0.000004917899848354643
      },
      {
        name: 'yvETH MAI Vault',
        chains: ['FTM'],
        borrows: 1323,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobFTM_MAI_yvETH%20MAI%20Vault.json',
        decimals: 18,
        deposits: 14252.267525674695,
        totalBadDebt: 0,
        tvl: 14252.267525674695,
        updated: 1704269900,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'yvWFTM MAI Vault',
        chains: ['FTM'],
        borrows: 5662.313379074739,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobFTM_MAI_yvWFTM%20MAI%20Vault.json',
        decimals: 18,
        deposits: 35179.38299891578,
        totalBadDebt: 0,
        tvl: 35179.38299891578,
        updated: 1704269869,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'yvYFI MAI Vault',
        chains: ['FTM'],
        borrows: 4965.40769837386,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobFTM_MAI_yvYFI%20MAI%20Vault.json',
        decimals: 18,
        deposits: 20859.107659473175,
        totalBadDebt: 0,
        tvl: 20859.107659473175,
        updated: 1704269936,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Arbitrum ARB MAI Vault',
        chains: ['arbitrum'],
        borrows: 8305.230014088402,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobarbitrum_MAI_Arbitrum%20ARB%20MAI%20Vault.json',
        decimals: 18,
        deposits: 52787.36323316768,
        totalBadDebt: 0,
        tvl: 52787.36323316768,
        updated: 1704270326,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Beefy Curve stETH ETH Arbitrum MAI Vault',
        chains: ['arbitrum'],
        borrows: 17800.94671065707,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobarbitrum_MAI_Beefy%20Curve%20stETH%20ETH%20Arbitrum%20MAI%20Vault.json',
        decimals: 18,
        deposits: 81636.9712366421,
        totalBadDebt: 0,
        tvl: 81636.9712366421,
        updated: 1704270323,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Gains DAI MAI Vault',
        chains: ['arbitrum'],
        borrows: 119659.3076036529,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobarbitrum_MAI_Gains%20DAI%20MAI%20Vault.json',
        decimals: 18,
        deposits: 150048.21011024687,
        totalBadDebt: 0,
        tvl: 150048.21011024687,
        updated: 1704270319,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Kyber Network Crystal MAI Vault',
        chains: ['arbitrum'],
        borrows: 0,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobarbitrum_MAI_Kyber%20Network%20Crystal%20MAI%20Vault.json',
        decimals: 18,
        deposits: 0,
        totalBadDebt: 0,
        tvl: 0,
        updated: 1704270329,
        usersWithBadDebtCount: 0,
        badDebtRatio: null
      },
      {
        name: 'Wrapped Bitcoin Arbitrum MAI Vault',
        chains: ['arbitrum'],
        borrows: 25351.665387795227,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobarbitrum_MAI_Wrapped%20Bitcoin%20Arbitrum%20MAI%20Vault.json',
        decimals: 18,
        deposits: 97647.95417845465,
        totalBadDebt: 0,
        tvl: 97647.95417845465,
        updated: 1704270316,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Wrapped Ethereum Arbitrum MAI Vault',
        chains: ['arbitrum'],
        borrows: 22221.83865384957,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobarbitrum_MAI_Wrapped%20Ethereum%20Arbitrum%20MAI%20Vault.json',
        decimals: 18,
        deposits: 62729.89982003259,
        totalBadDebt: 0,
        tvl: 62729.89982003259,
        updated: 1704270313,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'AVAX MAI Vault',
        chains: ['avalanche'],
        borrows: 3661.7362380113445,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobavalanche_MAI_AVAX%20MAI%20Vault.json',
        decimals: 18,
        deposits: 23002.855840116837,
        totalBadDebt: 0,
        tvl: 23002.855840116837,
        updated: 1704270287,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'BTC MAI Vault',
        chains: ['avalanche'],
        borrows: 34345.28397449752,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobavalanche_MAI_BTC%20MAI%20Vault.json',
        decimals: 18,
        deposits: 150954.972512036,
        totalBadDebt: 0,
        tvl: 150954.972512036,
        updated: 1704270284,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'ETH MAI Vault',
        chains: ['avalanche'],
        borrows: 1012.4398979573815,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobavalanche_MAI_ETH%20MAI%20Vault.json',
        decimals: 18,
        deposits: 3817.684324009896,
        totalBadDebt: 0,
        tvl: 3817.684324009896,
        updated: 1704270284,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Moo Aave AVAX MAI Vault',
        chains: ['avalanche'],
        borrows: 30726.87043730197,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobavalanche_MAI_Moo%20Aave%20AVAX%20MAI%20Vault.json',
        decimals: 18,
        deposits: 121768.6383686347,
        totalBadDebt: 0,
        tvl: 121768.6383686347,
        updated: 1704270275,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Stake DAO av3CRV Strategy MAI Vault',
        chains: ['avalanche'],
        borrows: 2451.0840077474236,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobavalanche_MAI_Stake%20DAO%20av3CRV%20Strategy%20MAI%20Vault.json',
        decimals: 18,
        deposits: 7081.316456078626,
        totalBadDebt: 0,
        tvl: 7081.316456078626,
        updated: 1704270275,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Beefy Convex Curve stETH Ethereum MAI Vault',
        chains: ['ethereum'],
        borrows: 0,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MAI_Beefy%20Convex%20Curve%20stETH%20Ethereum%20MAI%20Vault.json',
        decimals: 18,
        deposits: 0.000635563097456809,
        totalBadDebt: 0,
        tvl: 0.000635563097456809,
        updated: 1704270419,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Coinbase Wrapped Staked ETH Ethereum MAI Vault',
        chains: ['ethereum'],
        borrows: 10000,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MAI_Coinbase%20Wrapped%20Staked%20ETH%20Ethereum%20MAI%20Vault.json',
        decimals: 18,
        deposits: 32145.345630917487,
        totalBadDebt: 0,
        tvl: 32145.345630917487,
        updated: 1704270419,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Curve DAO Token Ethereum MAI Vault',
        chains: ['ethereum'],
        borrows: 0,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MAI_Curve%20DAO%20Token%20Ethereum%20MAI%20Vault.json',
        decimals: 18,
        deposits: 0.000799836442124309,
        totalBadDebt: 0,
        tvl: 0.000799836442124309,
        updated: 1704270419,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Lido Ethereum MAI Vault',
        chains: ['ethereum'],
        borrows: 73600.67430562314,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MAI_Lido%20Ethereum%20MAI%20Vault.json',
        decimals: 18,
        deposits: 201884.4876651838,
        totalBadDebt: 0,
        tvl: 201884.4876651838,
        updated: 1704270419,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Liquid Staked Ether Ethereum MAI Vault',
        chains: ['ethereum'],
        borrows: 0,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MAI_Liquid%20Staked%20Ether%20Ethereum%20MAI%20Vault.json',
        decimals: 18,
        deposits: 998.7758373425721,
        totalBadDebt: 0,
        tvl: 998.7758373425721,
        updated: 1704270419,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'StakeDAO Curve stETH Ethereum MAI Vault',
        chains: ['ethereum'],
        borrows: 135677.31305306318,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MAI_StakeDAO%20Curve%20stETH%20Ethereum%20MAI%20Vault.json',
        decimals: 18,
        deposits: 492968.9738004431,
        totalBadDebt: 0,
        tvl: 492968.9738004431,
        updated: 1704270407,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'StakeDAO Curve stETH Ethereum v2 MAI Vault',
        chains: ['ethereum'],
        borrows: 0,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MAI_StakeDAO%20Curve%20stETH%20Ethereum%20v2%20MAI%20Vault.json',
        decimals: 18,
        deposits: 95.96423587777291,
        totalBadDebt: 0,
        tvl: 95.96423587777291,
        updated: 1704270419,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Wrapped Bitcoin MAI Vault',
        chains: ['ethereum'],
        borrows: 243179.941227798,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MAI_Wrapped%20Bitcoin%20MAI%20Vault.json',
        decimals: 18,
        deposits: 762822.3417039984,
        totalBadDebt: 0,
        tvl: 762822.3417039984,
        updated: 1704270407,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Wrapped Ethereum MAI Vault',
        chains: ['ethereum'],
        borrows: 307212.38622487726,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MAI_Wrapped%20Ethereum%20MAI%20Vault.json',
        decimals: 18,
        deposits: 1059919.1862725075,
        totalBadDebt: 0,
        tvl: 1059919.1862725075,
        updated: 1704270407,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Yearn Curve stETH Ethereum MAI Vault',
        chains: ['ethereum'],
        borrows: 161852.83361712453,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MAI_Yearn%20Curve%20stETH%20Ethereum%20MAI%20Vault.json',
        decimals: 18,
        deposits: 851093.7350082169,
        totalBadDebt: 0,
        tvl: 851093.7350082169,
        updated: 1704270407,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Yearn ETH Ethereum MAI Vault',
        chains: ['ethereum'],
        borrows: 0,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MAI_Yearn%20ETH%20Ethereum%20MAI%20Vault.json',
        decimals: 18,
        deposits: 6018.527002699795,
        totalBadDebt: 0,
        tvl: 6018.527002699795,
        updated: 1704270407,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Yearn LINK Ethereum MAI Vault',
        chains: ['ethereum'],
        borrows: 386541.1352103808,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobethereum_MAI_Yearn%20LINK%20Ethereum%20MAI%20Vault.json',
        decimals: 18,
        deposits: 1024895.1262269976,
        totalBadDebt: 0,
        tvl: 1024895.1262269976,
        updated: 1704270407,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'GNO MAI Vault',
        chains: ['gnosis'],
        borrows: 1457.3659455904863,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobgnosis_MAI_GNO%20MAI%20Vault.json',
        decimals: 18,
        deposits: 6326.060043620553,
        totalBadDebt: 0,
        tvl: 6326.060043620553,
        updated: 1704270280,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'WETH MAI Vault',
        chains: ['gnosis'],
        borrows: 7933.481140347895,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobgnosis_MAI_WETH%20MAI%20Vault.json',
        decimals: 18,
        deposits: 22953.38340759295,
        totalBadDebt: 0,
        tvl: 22953.38340759295,
        updated: 1704270280,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'BTC MAI Vault',
        chains: ['harmony'],
        borrows: 10,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobharmony_MAI_BTC%20MAI%20Vault.json',
        decimals: 18,
        deposits: 17.896894214912322,
        totalBadDebt: 0,
        tvl: 17.896894214912322,
        updated: 1704270317,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'ETH MAI Vault',
        chains: ['harmony'],
        borrows: 5738,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobharmony_MAI_ETH%20MAI%20Vault.json',
        decimals: 18,
        deposits: 9791.142468317299,
        totalBadDebt: 0,
        tvl: 9791.142468317299,
        updated: 1704270315,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'ONE MAI Vault',
        chains: ['harmony'],
        borrows: 2589.360082279402,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobharmony_MAI_ONE%20MAI%20Vault.json',
        decimals: 18,
        deposits: 5123.12326607532,
        totalBadDebt: -1.687267992722908,
        tvl: 5123.12326607532,
        updated: 1704270315,
        usersWithBadDebtCount: 7,
        badDebtRatio: -0.0003293436259665632
      },
      {
        name: 'METIS MAI Vault',
        chains: ['metis'],
        borrows: 117472.88093669014,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobmetis_MAI_METIS%20MAI%20Vault.json',
        decimals: 18,
        deposits: 913715.5066673014,
        totalBadDebt: 0,
        tvl: 913715.5066673014,
        updated: 1704270410,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'WBTC METIS MAI Vault',
        chains: ['metis'],
        borrows: 0,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobmetis_MAI_WBTC%20METIS%20MAI%20Vault.json',
        decimals: 18,
        deposits: 1186.141342094227,
        totalBadDebt: 0,
        tvl: 1186.141342094227,
        updated: 1704270500,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'WBTC Metis MAI Vault',
        chains: ['metis'],
        borrows: 84,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobmetis_MAI_WBTC%20Metis%20MAI%20Vault.json',
        decimals: 18,
        deposits: 1100.156424337828,
        totalBadDebt: 0,
        tvl: 1100.156424337828,
        updated: 1704270500,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'WETH METIS MAI Vault',
        chains: ['metis'],
        borrows: 4272.285700578304,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobmetis_MAI_WETH%20METIS%20MAI%20Vault.json',
        decimals: 18,
        deposits: 25840.185265245575,
        totalBadDebt: 0,
        tvl: 25840.185265245575,
        updated: 1704270500,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'ETH MAI Vault',
        chains: ['moonriver'],
        borrows: 0,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobmoonriver_MAI_ETH%20MAI%20Vault.json',
        decimals: 18,
        deposits: 0,
        totalBadDebt: 0,
        tvl: 0,
        updated: 1704270186,
        usersWithBadDebtCount: 0,
        badDebtRatio: null
      },
      {
        name: 'MOVR MAI Vault',
        chains: ['moonriver'],
        borrows: 0,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobmoonriver_MAI_MOVR%20MAI%20Vault.json',
        decimals: 18,
        deposits: 869.5939707360793,
        totalBadDebt: 0,
        tvl: 869.5939707360793,
        updated: 1704270186,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Moo Solarbeam ETH-USDC MAI Vault',
        chains: ['moonriver'],
        borrows: 0,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobmoonriver_MAI_Moo%20Solarbeam%20ETH-USDC%20MAI%20Vault.json',
        decimals: 18,
        deposits: 0,
        totalBadDebt: 0,
        tvl: 0,
        updated: 1704270186,
        usersWithBadDebtCount: 0,
        badDebtRatio: null
      },
      {
        name: 'Beefy Aave Optimism BTC Vault',
        chains: ['optimism'],
        borrows: 14205.732950003632,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjoboptimism_MAI_Beefy%20Aave%20Optimism%20BTC%20Vault.json',
        decimals: 18,
        deposits: 62361.54077282154,
        totalBadDebt: 0,
        tvl: 62361.54077282154,
        updated: 1704270483,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Beefy Aave Optimism DAI Vault',
        chains: ['optimism'],
        borrows: 0,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjoboptimism_MAI_Beefy%20Aave%20Optimism%20DAI%20Vault.json',
        decimals: 18,
        deposits: 24.113301066391355,
        totalBadDebt: 0,
        tvl: 24.113301066391355,
        updated: 1704270493,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Beefy Aave Optimism ETH Vault',
        chains: ['optimism'],
        borrows: 29566.95751969954,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjoboptimism_MAI_Beefy%20Aave%20Optimism%20ETH%20Vault.json',
        decimals: 18,
        deposits: 129569.17513792538,
        totalBadDebt: 0,
        tvl: 129569.17513792538,
        updated: 1704270485,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Beefy Curve stETH Optimism MAI Vault',
        chains: ['optimism'],
        borrows: 114975.2022651278,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjoboptimism_MAI_Beefy%20Curve%20stETH%20Optimism%20MAI%20Vault.json',
        decimals: 18,
        deposits: 306541.28532308724,
        totalBadDebt: 0,
        tvl: 306541.28532308724,
        updated: 1704270499,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Kyber Network Crystal MAI Vault',
        chains: ['optimism'],
        borrows: 0,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjoboptimism_MAI_Kyber%20Network%20Crystal%20MAI%20Vault.json',
        decimals: 18,
        deposits: 1.6705773507658763,
        totalBadDebt: 0,
        tvl: 1.6705773507658763,
        updated: 1704270505,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Optimism MAI Vault',
        chains: ['optimism'],
        borrows: 28162.574209004495,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjoboptimism_MAI_Optimism%20MAI%20Vault.json',
        decimals: 18,
        deposits: 218976.71613070584,
        totalBadDebt: 0,
        tvl: 218976.71613070584,
        updated: 1704270429,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Wrapped Bitcoin Optimism MAI Vault',
        chains: ['optimism'],
        borrows: 27511.626592806708,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjoboptimism_MAI_Wrapped%20Bitcoin%20Optimism%20MAI%20Vault.json',
        decimals: 18,
        deposits: 79367.93519068761,
        totalBadDebt: 0,
        tvl: 79367.93519068761,
        updated: 1704270425,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Wrapped Ethereum Optimism MAI Vault',
        chains: ['optimism'],
        borrows: 158675.9254240384,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjoboptimism_MAI_Wrapped%20Ethereum%20Optimism%20MAI%20Vault.json',
        decimals: 18,
        deposits: 413392.87335231336,
        totalBadDebt: -0.012087912238806633,
        tvl: 413392.87335231336,
        updated: 1704270323,
        usersWithBadDebtCount: 1,
        badDebtRatio: -2.924073688252659e-8
      },
      {
        name: 'Yearn ETH Optimism MAI Vault',
        chains: ['optimism'],
        borrows: 9900.311919358652,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjoboptimism_MAI_Yearn%20ETH%20Optimism%20MAI%20Vault.json',
        decimals: 18,
        deposits: 28069.04074882582,
        totalBadDebt: 0,
        tvl: 28069.04074882582,
        updated: 1704270501,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'wstETH Optimism MAI Vault',
        chains: ['optimism'],
        borrows: 265842.97848423664,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjoboptimism_MAI_wstETH%20Optimism%20MAI%20Vault.json',
        decimals: 18,
        deposits: 747744.7325424593,
        totalBadDebt: 0,
        tvl: 747744.7325424593,
        updated: 1704270495,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'AAVE MAI Vault',
        chains: ['polygon'],
        borrows: 8419.546791991947,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_AAVE%20MAI%20Vault.json',
        decimals: 18,
        deposits: 27782.15459250299,
        totalBadDebt: 0,
        tvl: 27782.15459250299,
        updated: 1704269733,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'BAL MAI Vault',
        chains: ['polygon'],
        borrows: 1160.6227861735374,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_BAL%20MAI%20Vault.json',
        decimals: 18,
        deposits: 3244.878924815578,
        totalBadDebt: 0,
        tvl: 3244.878924815578,
        updated: 1704269749,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'CRV MAI Vault',
        chains: ['polygon'],
        borrows: 2564.8025997039695,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_CRV%20MAI%20Vault.json',
        decimals: 18,
        deposits: 11719.044852616062,
        totalBadDebt: -0.0814287540200163,
        tvl: 11719.044852616062,
        updated: 1704269735,
        usersWithBadDebtCount: 2,
        badDebtRatio: -0.000006948412182400584
      },
      {
        name: 'Celsius MAI Vault',
        chains: ['polygon'],
        borrows: 2.785595914732338,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_Celsius%20MAI%20Vault.json',
        decimals: 18,
        deposits: 3.773914956361,
        totalBadDebt: -0.20102818744041234,
        tvl: 3.773914956361,
        updated: 1704269819,
        usersWithBadDebtCount: 1,
        badDebtRatio: -0.05326781068597632
      },
      {
        name: 'Celsius X Ada MAI Vault',
        chains: ['polygon'],
        borrows: 12434,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_Celsius%20X%20Ada%20MAI%20Vault.json',
        decimals: 18,
        deposits: 0,
        totalBadDebt: -12434,
        tvl: 0,
        updated: 1704269813,
        usersWithBadDebtCount: 17,
        badDebtRatio: null
      },
      {
        name: 'Celsius X Doge MAI Vault',
        chains: ['polygon'],
        borrows: 2594.53125,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_Celsius%20X%20Doge%20MAI%20Vault.json',
        decimals: 18,
        deposits: 0,
        totalBadDebt: -2594.53125,
        tvl: 0,
        updated: 1704269809,
        usersWithBadDebtCount: 22,
        badDebtRatio: null
      },
      {
        name: 'Celsius X ETH MAI Vault',
        chains: ['polygon'],
        borrows: 10073.789825826963,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_Celsius%20X%20ETH%20MAI%20Vault.json',
        decimals: 18,
        deposits: 0,
        totalBadDebt: -10073.789825826963,
        tvl: 0,
        updated: 1704269813,
        usersWithBadDebtCount: 21,
        badDebtRatio: null
      },
      {
        name: 'Frax Share MAI Vault',
        chains: ['polygon'],
        borrows: 7658.044597416545,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_Frax%20Share%20MAI%20Vault.json',
        decimals: 18,
        deposits: 28259.315569876275,
        totalBadDebt: 0,
        tvl: 28259.315569876275,
        updated: 1704269807,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'GHST MAI Vault',
        chains: ['polygon'],
        borrows: 33008.976743977786,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_GHST%20MAI%20Vault.json',
        decimals: 18,
        deposits: 87192.55198537324,
        totalBadDebt: 0,
        tvl: 87192.55198537324,
        updated: 1704269763,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Gains DAI MAI Vault',
        chains: ['polygon'],
        borrows: 146478.48179217472,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_Gains%20DAI%20MAI%20Vault.json',
        decimals: 18,
        deposits: 201469.19234860048,
        totalBadDebt: 0,
        tvl: 201469.19234860048,
        updated: 1704269841,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Kyber Network Crystal Matic MAI Vault',
        chains: ['polygon'],
        borrows: 948.8294952306738,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_Kyber%20Network%20Crystal%20Matic%20MAI%20Vault.json',
        decimals: 18,
        deposits: 2952.6790596419073,
        totalBadDebt: 0,
        tvl: 2952.6790596419073,
        updated: 1704269833,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'LINK MAI Vault',
        chains: ['polygon'],
        borrows: 306412.0665441517,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_LINK%20MAI%20Vault.json',
        decimals: 18,
        deposits: 996368.5850301662,
        totalBadDebt: 0,
        tvl: 996368.5850301662,
        updated: 1704269731,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Liquid Staking Matic MAI Vault',
        chains: ['polygon'],
        borrows: 112356.10203077646,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_Liquid%20Staking%20Matic%20MAI%20Vault.json',
        decimals: 18,
        deposits: 303614.11302884424,
        totalBadDebt: 0,
        tvl: 303614.11302884424,
        updated: 1704269843,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'MAI DAI Arrakis Polygon MAI Vault',
        chains: ['polygon'],
        borrows: 101,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_MAI%20DAI%20Arrakis%20Polygon%20MAI%20Vault.json',
        decimals: 18,
        deposits: 167.89331166450114,
        totalBadDebt: 0,
        tvl: 167.89331166450114,
        updated: 1704269833,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Matic MAI Vault',
        chains: ['polygon'],
        borrows: 116943.37165317404,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_Matic%20MAI%20Vault.json',
        decimals: 18,
        deposits: 278037.39193189546,
        totalBadDebt: 0,
        tvl: 278037.39193189546,
        updated: 1704269823,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Sand MAI Vault',
        chains: ['polygon'],
        borrows: 515.8374491976599,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_Sand%20MAI%20Vault.json',
        decimals: 18,
        deposits: 1885.1127036014984,
        totalBadDebt: -0.07796133359380887,
        tvl: 1885.1127036014984,
        updated: 1704269827,
        usersWithBadDebtCount: 1,
        badDebtRatio: -0.000041356324979861484
      },
      {
        name: 'Stake DAO am3CRV Strategy MAI Vault',
        chains: ['polygon'],
        borrows: 18741.07835690285,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_Stake%20DAO%20am3CRV%20Strategy%20MAI%20Vault.json',
        decimals: 18,
        deposits: 57062.56583842287,
        totalBadDebt: 0,
        tvl: 57062.56583842287,
        updated: 1704269803,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'Staked Matic MAI Vault',
        chains: ['polygon'],
        borrows: 228007.53328251126,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_Staked%20Matic%20MAI%20Vault.json',
        decimals: 18,
        deposits: 643312.6749081109,
        totalBadDebt: 0,
        tvl: 643312.6749081109,
        updated: 1704269833,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'WBTC MAI Vault',
        chains: ['polygon'],
        borrows: 790259.970835888,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_WBTC%20MAI%20Vault.json',
        decimals: 18,
        deposits: 2818872.3145051016,
        totalBadDebt: 0,
        tvl: 2818872.3145051016,
        updated: 1704269757,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'WETH MAI Vault',
        chains: ['polygon'],
        borrows: 578731.7143143086,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_WETH%20MAI%20Vault.json',
        decimals: 18,
        deposits: 2074483.501882788,
        totalBadDebt: -0.00788810006504515,
        tvl: 2074483.501882788,
        updated: 1704269675,
        usersWithBadDebtCount: 3,
        badDebtRatio: -3.802440490794919e-9
      },
      {
        name: 'camAAVE MAI Vault',
        chains: ['polygon'],
        borrows: 49024.95950370114,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_camAAVE%20MAI%20Vault.json',
        decimals: 18,
        deposits: 230207.87090248786,
        totalBadDebt: 0,
        tvl: 230207.87090248786,
        updated: 1704269793,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'camDAI MAI Vault',
        chains: ['polygon'],
        borrows: 2144.7902491475893,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_camDAI%20MAI%20Vault.json',
        decimals: 18,
        deposits: 7162.271304718344,
        totalBadDebt: 0,
        tvl: 7162.271304718344,
        updated: 1704269799,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'camWBTC MAI Vault',
        chains: ['polygon'],
        borrows: 508055.6846052101,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_camWBTC%20MAI%20Vault.json',
        decimals: 18,
        deposits: 1993076.2189938552,
        totalBadDebt: 0,
        tvl: 1993076.2189938552,
        updated: 1704269797,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'camWETH MAI Vault',
        chains: ['polygon'],
        borrows: 1993333.444077761,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_camWETH%20MAI%20Vault.json',
        decimals: 18,
        deposits: 7427706.64839859,
        totalBadDebt: 0,
        tvl: 7427706.64839859,
        updated: 1704269783,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'camWMATIC MAI Vault',
        chains: ['polygon'],
        borrows: 122405.94301839877,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_camWMATIC%20MAI%20Vault.json',
        decimals: 18,
        deposits: 569427.6859766467,
        totalBadDebt: -0.07229506648513305,
        tvl: 569427.6859766467,
        updated: 1704269767,
        usersWithBadDebtCount: 3,
        badDebtRatio: -1.2696092632225473e-7
      },
      {
        name: 'dQUICK MAI Vault',
        chains: ['polygon'],
        borrows: 15603.393185373976,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_dQUICK%20MAI%20Vault.json',
        decimals: 18,
        deposits: 39220.95177996037,
        totalBadDebt: 0,
        tvl: 39220.95177996037,
        updated: 1704269755,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'miMATIC',
        chains: ['polygon'],
        borrows: 20246.02000117842,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_miMATIC.json',
        decimals: 18,
        deposits: 156310.6090684867,
        totalBadDebt: -0.043039453395460794,
        tvl: 156310.6090684867,
        updated: 1704269609,
        usersWithBadDebtCount: 8,
        badDebtRatio: -2.7534569567573804e-7
      },
      {
        name: 'vGHST Mai Vault ',
        chains: ['polygon'],
        borrows: 660048.5162842831,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_vGHST%20Mai%20Vault%20.json',
        decimals: 18,
        deposits: 1585982.4998276893,
        totalBadDebt: 0,
        tvl: 1585982.4998276893,
        updated: 1704269815,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'wstETH MAI Vault',
        chains: ['polygon'],
        borrows: 259622.83983187954,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_wstETH%20MAI%20Vault.json',
        decimals: 18,
        deposits: 735895.6944092794,
        totalBadDebt: 0,
        tvl: 735895.6944092794,
        updated: 1704269837,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'xxDAI Tetu MAI Vault',
        chains: ['polygon'],
        borrows: 0,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_xxDAI%20Tetu%20MAI%20Vault.json',
        decimals: 18,
        deposits: 0.926846878331813,
        totalBadDebt: 0,
        tvl: 0.926846878331813,
        updated: 1704269829,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      },
      {
        name: 'xxLink Tetu MAI Vault',
        chains: ['polygon'],
        borrows: 30,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/subjobpolygon_MAI_xxLink%20Tetu%20MAI%20Vault.json',
        decimals: 18,
        deposits: 371.9767907081398,
        totalBadDebt: 0,
        tvl: 371.9767907081398,
        updated: 1704269829,
        usersWithBadDebtCount: 0,
        badDebtRatio: 0
      }
    ],
    badDebtRatio: 0
  },
  {
    name: 'Inverse',
    chains: ['ethereum'],
    borrows: 15164166.759655448,
    dataFileLink:
      'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/ethereum_inverse.json',
    decimals: 18,
    deposits: 68062.86236534442,
    totalBadDebt: -15105820.030354217,
    tvl: 20603182.24583468,
    updated: 1704623903,
    usersWithBadDebtCount: 291,
    badDebtRatio: -0.7331789744959492
  },
  {
    name: 'Moonwell',
    chains: ['MOONBEAM'],
    borrows: 12157739.745125381,
    dataFileLink:
      'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/MOONBEAM_Moonwell.json',
    decimals: 18,
    deposits: 20041861.33559796,
    totalBadDebt: -8517763.700112585,
    tvl: 17669548.009040434,
    updated: 1704707814,
    usersWithBadDebtCount: 84,
    badDebtRatio: -0.4820589465986658
  },
  {
    name: 'Agave',
    chains: ['gnosis'],
    borrows: 3110152.43968142,
    dataFileLink:
      'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/gnosis_agave.json',
    decimals: 18,
    deposits: 11559821.637324922,
    totalBadDebt: -0.002099125788445413,
    tvl: 8835258.347487997,
    updated: 1704708815,
    usersWithBadDebtCount: 4,
    badDebtRatio: -2.3758510570799864e-10
  },
  {
    name: 'Trader-joe',
    chains: ['avalanche'],
    borrows: 2436909.3950136015,
    dataFileLink:
      'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/avalanche_trader-joe.json',
    decimals: 18,
    deposits: 7427207.864806096,
    totalBadDebt: -2602.986918086656,
    tvl: 8255151.249803138,
    updated: 1704709297,
    usersWithBadDebtCount: 294,
    badDebtRatio: -0.0003153166840097242
  },
  {
    name: 'Granary',
    chains: ['FTM', 'optimism'],
    borrows: 4570973.683823419,
    dataFileLink: '',
    decimals: 18,
    deposits: 8742064.098281056,
    totalBadDebt: -20050.461877169997,
    tvl: 7059874.281238712,
    updated: 1704708551,
    usersWithBadDebtCount: 246,
    subResults: [
      {
        name: 'FTM',
        chains: ['FTM'],
        borrows: 773894.3018987008,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/FTM_granary.json',
        decimals: 18,
        deposits: 1837423.9589259578,
        totalBadDebt: -17888.184765579997,
        tvl: 1008861.4728246597,
        updated: 1704708571,
        usersWithBadDebtCount: 99,
        badDebtRatio: -0.017731061446420174
      },
      {
        name: 'optimism',
        chains: ['optimism'],
        borrows: 3797079.381924718,
        dataFileLink:
          'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/optimism_granary.json',
        decimals: 18,
        deposits: 6904640.139355097,
        totalBadDebt: -2162.2771115899977,
        tvl: 6051012.808414053,
        updated: 1704708551,
        usersWithBadDebtCount: 147,
        badDebtRatio: -0.00035734135425780436
      }
    ],
    badDebtRatio: 0
  },
  {
    name: 'Apeswap',
    chains: ['BSC'],
    borrows: 867060.7129359589,
    dataFileLink: 'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/BSC_apeswap.json',
    decimals: 18,
    deposits: 2675984.2040426824,
    totalBadDebt: -91.06160911337088,
    tvl: 2149495.5632231063,
    updated: 1704707270,
    usersWithBadDebtCount: 54,
    badDebtRatio: -0.00004236417635439388
  },
  {
    name: 'Aurigami',
    chains: ['aurora'],
    borrows: 362038.67552631913,
    dataFileLink:
      'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/aurora_aurigami.json',
    decimals: 18,
    deposits: 1183489.0759370255,
    totalBadDebt: -0.1238428722191008,
    tvl: 1924101.5945854571,
    updated: 1704709465,
    usersWithBadDebtCount: 8,
    badDebtRatio: -6.436399853708476e-8
  },
  {
    name: 'Cream',
    chains: ['BSC'],
    borrows: 633080.0803015236,
    dataFileLink: 'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/BSC_cream.json',
    decimals: 18,
    deposits: 1439028.3614515632,
    totalBadDebt: -230375.21549830414,
    tvl: 1744032.1051032178,
    updated: 1672815718,
    usersWithBadDebtCount: 327,
    badDebtRatio: -0.13209344875257886
  },
  {
    name: 'Rari-capital',
    chains: ['ethereum'],
    borrows: 1298708.361505322,
    dataFileLink:
      'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/ethereum_rari-capital.json',
    decimals: 18,
    deposits: 1607376.9944707802,
    totalBadDebt: -988249.3901717066,
    tvl: 1464007.1629433206,
    updated: 1704708287,
    usersWithBadDebtCount: 362,
    badDebtRatio: -0.675030433720608
  },
  {
    name: 'Bastion',
    chains: ['aurora'],
    borrows: 36059.996855796715,
    dataFileLink:
      'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/aurora_bastion.json',
    decimals: 18,
    deposits: 210911.98342015294,
    totalBadDebt: -4.103028453182884,
    tvl: 935865.0644359984,
    updated: 1704706250,
    usersWithBadDebtCount: 10,
    badDebtRatio: -0.000004384209443329937
  },
  {
    name: 'Rikki',
    chains: ['BSC'],
    borrows: 26457.749177442358,
    dataFileLink: 'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/BSC_rikki.json',
    decimals: 18,
    deposits: 51267.183023420184,
    totalBadDebt: -654.920182195063,
    tvl: 39485.177546935265,
    updated: 1704707393,
    usersWithBadDebtCount: 4,
    badDebtRatio: -0.01658648188719861
  },
  {
    name: 'Morpho-blue',
    chains: ['ethereum'],
    borrows: 44.5358895850974,
    dataFileLink:
      'https://raw.githubusercontent.com/Risk-DAO/simulation-results/main/bad-debt/latest/ethereum_morpho-blue.json',
    decimals: 18,
    deposits: 102.78431999999998,
    totalBadDebt: 0,
    tvl: 143.94282225405078,
    updated: 1704707459,
    usersWithBadDebtCount: 0,
    badDebtRatio: 0
  }
];
