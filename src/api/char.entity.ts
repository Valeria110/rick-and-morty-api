export interface IChar {
  id: string;
  name: string;
  status: CharStatus;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };

  image: string;
  episode: string[];
  url: string;
  created: string;
}

export enum CharStatus {
  ALIVE = "Alive",
  DEAD = "Dead",
  UNKNOWN = "unknown",
}
