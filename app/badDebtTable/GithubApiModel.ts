export interface GithubRecursiveResponse {
  sha: string;
  url: string;
  tree: Tree[];
  truncated: boolean;
}

export interface Tree {
  path: string;
  mode: string;
  type: string;
  sha: string;
  url: string;
  size?: number;
}

export interface DataFileContent {
  name: string;
  chain: string;
  subName?: string;
  total: string;
  updated: string;
  decimals: string;
  users: { user: string; badDebt: string }[];
  tvl: string;
  deposits: string;
  borrows: string;
  calculatedBorrows: string;
  link: string;
}
