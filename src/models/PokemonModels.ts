export interface Pokemon {
  id: number;
  name: string;
  type: string;
  url: string;
  order: number;
  image: string;
  sprites: {
    other: string;
  };
  types: any[];
  stats: any;
}
