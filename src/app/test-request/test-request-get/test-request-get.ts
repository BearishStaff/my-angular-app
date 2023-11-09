export interface IndexResponse {
    count: number;
    results: Index[];
}

export interface Index {
  index: string;
  name: string;
  url: string;
}