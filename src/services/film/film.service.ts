import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError } from 'rxjs';
import { FilmDetailsDto } from '../../model/film-details-dto';
import { FilmDto } from '../../model/film-dto';
import { GenreDto } from '../../model/genre-dto';
import { FeedbackDto } from '../../model/feedback-dto';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private baseUrl = 'http://localhost:8080/api/film';
  private urlGenre = 'http://localhost:8080/api/genre';
  private adminUrl = 'http://localhost:8080/api/admin/film';

  constructor(private http: HttpClient, private router: Router) {}

  getSearchSuggestions(searchTerm: string): Observable<FilmDetailsDto[]> {
    return this.http.get<FilmDetailsDto[]>(
      `${this.baseUrl}/search-suggestions?term=${searchTerm}`
    );
  }

  searchMoviesByTitle(title: string): Observable<FilmDetailsDto[]> {
    return this.http.get<FilmDetailsDto[]>(
      `${this.baseUrl}/search?title=${title}`
    );
  }

  getMoviesBySearch(title: string): Observable<FilmDetailsDto[]> {
    const params = new HttpParams().set('title', title);
    return this.http.get<FilmDetailsDto[]>(`${this.baseUrl}/search`, {
      params,
    });
  }

  getFilmDetailsById(filmId: number): Observable<FilmDetailsDto> {
    return this.http.get<FilmDetailsDto>(`${this.baseUrl}/${filmId}`);
  }

  getFilmDetailsByProjectionId(
    projectionId: number
  ): Observable<FilmDetailsDto> {
    return this.http.get<FilmDetailsDto>(
      `${this.baseUrl}/${projectionId}/projection`
    );
  }
  getFilmsByGenre(genre: string): Observable<FilmDto[]> {
    return this.http.get<FilmDto[]>(`${this.baseUrl}/filter?genre=${genre}`);
  }

  getAllFilms(): Observable<FilmDto[]> {
    return this.http.get<FilmDto[]>(`${this.baseUrl}/all`);
  }

  getAllFilmsDetails(): Observable<FilmDetailsDto[]> {
    return this.http.get<FilmDetailsDto[]>(`${this.baseUrl}/all`);
  }

  getAllGenres(): Observable<GenreDto[]> {
    return this.http.get<GenreDto[]>(`${this.urlGenre}/all`);
  }

  addFilm(filmData: FilmDetailsDto): Observable<void> {
    console.log(filmData);
    return this.http.post<void>(`${this.adminUrl}/`, filmData);
  }

  getTop10Films(): Observable<FilmDetailsDto[]> {
    return this.http.get<FilmDetailsDto[]>(`${this.baseUrl}/top10`);
  }

  private genreEmojiMap: { [key: string]: string } = {
    Animation: '🔮',
    Action: '🔥',
    Comedy: '😄',
    Drama: '🎭',
    Mystery: '🚟',
    Fantasy: '🧙🏻‍♂️',
    Romance: '❤️‍🩹',
    Crime: '🔫',
    Thriller: '🎢',
    Horror: '🧌',
  };

  getGenreEmoji(genre: string): string {
    return this.genreEmojiMap[genre] || '❓';
  }

  getFeedbackById(filmId: number): Observable<FeedbackDto[]> {
    return this.http.get<FeedbackDto[]>(this.baseUrl + `/${filmId}/feedback`);
  }
}
