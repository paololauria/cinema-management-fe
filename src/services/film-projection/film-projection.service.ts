import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError } from 'rxjs';
import { DailyProjectionToday } from '../../model/daily-projection-dto';
import { FilmProjectionDto } from '../../model/film-projection-dto';
import { ReservationDto } from '../../model/reservation-dto';
import { ProjectionReservationDto } from '../../model/projection-reservation-dto';

@Injectable({
  providedIn: 'root',
})
export class FilmProjectionService {
  private baseUrl = 'http://localhost:8080/api/projection';

  constructor(private http: HttpClient, private router: Router) {}

  getAllFilmProjectionsByFilmId(
    filmId: number
  ): Observable<FilmProjectionDto[]> {
    return this.http.get<FilmProjectionDto[]>(
      `${this.baseUrl}/find-by-film/${filmId}`
    );
  }

  getAllProjections(): Observable<FilmProjectionDto[]> {
    return this.http.get<FilmProjectionDto[]>(`${this.baseUrl}/all`);
  }

  getAllFilmsProjectionNextWeek(): Observable<FilmProjectionDto[]> {
    return this.http.get<FilmProjectionDto[]>(`${this.baseUrl}/next-week`);
  }

  getAllFilmsProjectionToday(): Observable<FilmProjectionDto[]> {
    return this.http.get<FilmProjectionDto[]>(`${this.baseUrl}/today`);
  }

  getAllFilmsProjectionPast(): Observable<FilmProjectionDto[]> {
    return this.http.get<FilmProjectionDto[]>(`${this.baseUrl}/past`);
  }

  getFilmProjectionsByFilmForToday(
    filmId: number
  ): Observable<DailyProjectionToday[]> {
    return this.http.get<DailyProjectionToday[]>(
      `${this.baseUrl}/${filmId}/today`
    );
  }

  getFilmProjectionId(filmProjectionId: number): Observable<FilmProjectionDto> {
    return this.http.get<FilmProjectionDto>(
      `${this.baseUrl}/${filmProjectionId}`
    );
  }

  getReservationByProjection(
    filmProjectionId: number
  ): Observable<ProjectionReservationDto> {
    return this.http.get<ProjectionReservationDto>(
      `${this.baseUrl}/${filmProjectionId}/reservation`
    );
  }

  generateDailyProjections(): Observable<string> {
    const endpoint = `${this.baseUrl}/generate-daily`;

    return this.http.post<string>(endpoint, {});
  }
}
