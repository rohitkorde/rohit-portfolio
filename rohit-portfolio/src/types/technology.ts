export interface Technology {
  name: string;
  url: string;
  logo: string;
  fallback: string;
}

export interface TechnologiesMap {
  [key: string]: Technology;
}
