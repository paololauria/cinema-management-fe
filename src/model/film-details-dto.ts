import { Actor } from './actors-dto';

export interface FilmDetailsDto {
  id: number;
  title: string;
  director: string;
  releaseYear: number;
  posterImage: string;
  description: string;
  duration: string;
  actorDto: Actor[];
  actors: string[];
  awards: string;
  imdbVotes: string;
  imdbRating: string;
  boxOffice: string;
  averageRating: number;
}
