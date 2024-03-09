import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError } from 'rxjs';
import { UserDto } from '../../model/user-dto';
import { User } from '../../model/user';
import { FeedbackDto } from '../../model/feedback-dto';
import { ReservationDto } from '../../model/reservation-dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient, private router: Router) {}

  getAllUser(): Observable<UserDto[]> {
    return this.http.get<UserDto[]>(`${this.baseUrl}/all`);
  }

  getUserById(userId: number): Observable<UserDto> {
    return this.http.get<UserDto>(`${this.baseUrl}/${userId}`);
  }

  getFeedbackByUser(userId: number): Observable<FeedbackDto[]> {
    return this.http.get<FeedbackDto[]>(`${this.baseUrl}/${userId}/feedback`);
  }
  getReservationByUser(userId: number): Observable<ReservationDto[]> {
    return this.http.get<ReservationDto[]>(
      `${this.baseUrl}/${userId}/reservation`
    );
  }

  addFeedback(feedbackData: FeedbackDto, filmId: number): Observable<void> {
    console.log(feedbackData);
    return this.http.post<void>(
      this.baseUrl + `/${filmId}/feedback`,
      feedbackData
    );
  }
}
