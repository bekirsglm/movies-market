export type Genre = {
  id: number;
  name: string;
};

export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview?: string;
  release_date?: string;
  runtime?: number;
  genres?: { id: number; name: string }[];
};