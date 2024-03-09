import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OmdbApiService {
  private baseUrl = 'http://localhost:8080/api/omdb/movie';

  constructor(private http: HttpClient, private router: Router) {}

  getMovieDetails(title: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${title}`);
  }

  getMoviesBySearch(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search/${query}`);
  }
}
