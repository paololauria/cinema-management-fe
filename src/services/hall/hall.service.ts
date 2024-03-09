import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError } from 'rxjs';
import { DailyProjectionToday } from '../../model/daily-projection-dto';
import { FilmProjectionDto } from '../../model/film-projection-dto';
import { HallDto } from '../../model/hall-dto';
import { ReservationDto } from '../../model/reservation-dto';
import { ReservationRequestDto } from '../../model/reservation-request-dto';

@Injectable({
  providedIn: 'root',
})
export class HallService {
  private baseUrl = 'http://localhost:8080/api/hall';
  private projectionUrl = 'http://localhost:8080/api/projection';
  private reservationUrl = 'http://localhost:8080/api/reservation';

  constructor(private http: HttpClient, private router: Router) {}

  getAllHalls(): Observable<HallDto[]> {
    return this.http.get<HallDto[]>(`${this.baseUrl}/all`);
  }
  getHallById(hallId: number): Observable<HallDto> {
    return this.http.get<HallDto>(`${this.baseUrl}/${hallId}`);
  }
  getHallByProjectionId(projectionId: number): Observable<HallDto> {
    return this.http.get<HallDto>(`${this.projectionUrl}/${projectionId}/hall`);
  }
  addReservation(reservationData: ReservationRequestDto): Observable<void> {
    return this.http.post<void>(`${this.reservationUrl}/`, reservationData);
  }
}
