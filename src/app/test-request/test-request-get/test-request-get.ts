export interface IndexResponse {
    count: number;
    results: Index[];
}

export interface Index {
  index: string;
  name: string;
  url: string;
}

export interface Car {
  vin : any;
  year : any;
  brand : any;
  color : any;
}

export interface ViewAccount{
  id: string;
  name: string;
}