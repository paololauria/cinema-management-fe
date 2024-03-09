import { Component, OnInit } from '@angular/core';
import { User } from '../../../../model/user';
import { AuthService } from '../../../../services/auth/auth.service';
import { UserDto } from '../../../../model/user-dto';
import { UserService } from '../../../../services/user/user.service';
import { FeedbackDto } from '../../../../model/feedback-dto';
import { ReservationDto } from '../../../../model/reservation-dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrl: './user-panel.component.css',
})
export class UserPanelComponent implements OnInit {
  userDto!: UserDto;
  feedback!: FeedbackDto[];
  reservation: ReservationDto[] = [];

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const userId = +params['userId'];
      this.loadUserDetails(userId);
      this.loadFeedback(userId);
      this.loadReservationDetail(userId);
      this.authService.checkLocalStorage();
    });

    console.log(this.reservation);
  }

  loadFeedback(userId: number) {
    this.userService.getFeedbackByUser(userId).subscribe({
      next: (f) => {
        console.log(f);
        this.feedback = f;
      },
    });
  }

  loadUserDetails(userId: number) {
    this.userService.getUserById(userId).subscribe({
      next: (u) => {
        this.userDto = u;
        this.loadFeedback(userId);
        console.log(this.userDto);
      },
      error: (err) => console.log(err),
    });
  }
  loadReservationDetail(userId: number) {
    this.userService.getReservationByUser(userId).subscribe({
      next: (r) => {
        this.reservation = r;
        console.log(this.reservation);
      },
      error: (err) => console.log(err),
    });
  }
  getCoordinate(id: number, hallId: number): string {
    let column: number;
    if (hallId == 1 || hallId == 3) {
      column = 8;
    } else if (hallId == 2) {
      column = 10;
    } else {
      column = 14;
    }
    const lettera = String.fromCharCode(65 + (id - 1) / column);
    const numero = ((id - 1) % column) + 1;
    return lettera + numero;
  }

  checkUserId() {
    let user: User | null;
    user = JSON.parse(localStorage.getItem('userData')!);
    if (user?.id == this.userDto.id) {
      if (user.role == 'ADMIN') {
        return true;
      }
      console.log('3:');
      return true;
    }
    return false;
  }
}
