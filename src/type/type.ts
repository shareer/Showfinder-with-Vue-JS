export interface TVShow {
    name: string;
    showImage: { medium: string; original: string };
    summary: string;
    runtime: number;
    genres: string[];
    id: number;
    officialSite: string;
    status: string;
    schedule: { time: string; days: string[] };
    rating: { average: number;};
  }