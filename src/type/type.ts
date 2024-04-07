export interface TVShow {
    name: string;
    showImage: { medium: string; original: string };
    summary: string;
    runtime: number;
    genres: string[];
    id: number;
    rating: { average: number;};
  }