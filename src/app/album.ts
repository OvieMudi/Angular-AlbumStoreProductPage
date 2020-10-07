import { Track } from './track';

export interface Album {
  id: number;
  name: string;
  artist: string;
  releaseDate: string;
  coverImage: string;
  tracks: Track[];
}
