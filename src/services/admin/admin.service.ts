import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError } from 'rxjs';
import { FilmDetailsDto } from '../../model/film-details-dto';
import { FilmProjectionDto } from '../../model/film-projection-dto';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private filmUrl = 'http://localhost:8080/api/admin/film';
  private projectionUrl = 'http://localhost:8080/api/admin/projection';
  private userUrl = 'http://localhost:8080/api/admin/user';
  private projectionDelete = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient, private router: Router) {}

  addFilm(filmData: FilmDetailsDto): Observable<void> {
    console.log(filmData);
    return this.http.post<void>(`${this.filmUrl}/`, filmData);
  }

  deleteFilmById(filmId: number): Observable<any> {
    return this.http.delete(`${this.filmUrl}/${filmId}`);
  }

  updateFilm(filmId: number, filmData: FilmDetailsDto): Observable<any> {
    const updateUrl = `${this.filmUrl}/${filmId}`;
    return this.http.put<any>(updateUrl, filmData);
  }

  // PROJECTION

  addProjection(projectionData: FilmProjectionDto): Observable<void> {
    console.log(projectionData);
    return this.http.post<void>(`${this.projectionUrl}/`, projectionData);
  }

  deleteProjectionById(projectionId: number): Observable<any> {
    return this.http.delete(
      `${this.projectionDelete}/${projectionId}/projection`
    );
  }

  updateProjection(
    projectionId: number,
    projectionData: FilmProjectionDto
  ): Observable<any> {
    const updateUrl = `${this.projectionUrl}/${projectionId}`;
    return this.http.put<any>(updateUrl, projectionData);
  }

  //USER
  deleteUserById(userId: number): Observable<any> {
    return this.http.delete(`${this.userUrl}/${userId}`);
  }
}
