import { Component, OnInit } from '@angular/core';
import { HallDto } from '../../../../model/hall-dto';
import { HallService } from '../../../../services/hall/hall.service';
import { FilmProjectionService } from '../../../../services/film-projection/film-projection.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FilmProjectionDto } from '../../../../model/film-projection-dto';
import { ReservationRequestDto } from '../../../../model/reservation-request-dto';
import { User } from '../../../../model/user';
import { AuthService } from '../../../../services/auth/auth.service';
import { FilmService } from '../../../../services/film/film.service';
import { FilmDetailsDto } from '../../../../model/film-details-dto';
import { ProjectionReservationDto } from '../../../../model/projection-reservation-dto';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css'],
})
export class HallComponent implements OnInit {
  booleanArray: boolean[] = [];
  discountCounter: number = 0;
  user: User | null = null;
  numSelected = 0;
  seatId: number[] = [];
  contatoreBooleane: number = 0;
  filmDetails!: FilmDetailsDto;
  filmId!: number;

  hall!: HallDto;
  reservation!: ProjectionReservationDto;
  projectionId!: number;
  reservationForm!: FormGroup;
  reservationData: ReservationRequestDto = {
    idProjection: 0,
    seatNumber: 0,
    reservedSeats: [],
    discount: false,
  };
  projection: FilmProjectionDto = {
    id: 0,
    filmTitle: '',
    filmId: 0,
    date: new Date(),
    time: '',
    hallId: 0,
    hallName: '',
    posterImage: '',
    duration: 0,
    ticketPrice: 0,
    averageRating: 0,
    imdbRating: '',
  };
  totalPrice: number = 0;
  clicked: boolean = false;
  numeroPostiDisponibili!: number;
  displayPrice!: number;

  seats: number[][] = []; // Inizialmente tutti a 0

  constructor(
    private hallService: HallService,
    private route: ActivatedRoute,
    private projectionService: FilmProjectionService,
    private authService: AuthService,
    private router: Router,
    private filmService: FilmService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.projectionId = +params['projectionId'];
      this.projectionService.getFilmProjectionId(this.projectionId).subscribe({
        next: (p) => {
          this.projection = p;
          this.loadFilmDetails(this.projectionId);
          this.loadHall(this.projectionId);
        },
      });
    });
    this.totalPrice = 0;
    this.seatId = [];
    this.booleanArray = [];
  }

  onSeatClick(event: Event) {
    if (this.seatId.length === 9) {
      alert('Limite massimo di posti selezionabili');
      return;
    }

    const seatElement = event.target as HTMLElement;
    if (!seatElement.id.startsWith('') || this.seatId.length > 8) {
      return;
    }

    const row = +(<string>seatElement.dataset['row']);
    const column = +(<string>seatElement.dataset['column']);

    if (this.seats[row][column] == 0) {
      this.seats[row][column] = 1;
      let a: boolean = false;
      this.booleanArray.push(a);
      this.seatId.push(+seatElement.id);
      this.numeroPostiDisponibili--;
    } else if (this.seats[row][column] == 1) {
      this.seats[row][column] = 0;
      for (let i = this.seats.length - 1; i >= 0; i--) {
        if (+seatElement.id == this.seatId[i]) {
          this.seatId.splice(i, 1);
          this.booleanArray.splice(i, 1);
          this.numeroPostiDisponibili++;
        }
      }
    } else if (this.seats[row][column] === -1) {
      return;
    }

    console.log(this.seatId);
    for (let s of this.seatId) {
      console.log(this.getCoordinate(s));
    }

    this.numSelected = this.getNumSelectedSeats();
    this.checkDisplayPrice(this.numSelected);
    console.log(this.booleanArray);
    this.totalPrice = this.displayPrice;
  }
  checkDisplayPrice(num: number) {
    this.displayPrice = this.projection.ticketPrice * num;
  }

  getNumSelectedSeats() {
    let sum = 0;
    for (let row of this.seats) {
      for (let seat of row) {
        if (seat === 1) {
          sum += 1;
        }
      }
    }
    return sum;
  }

  loadReservation(projectionId: number) {
    this.projectionService.getReservationByProjection(projectionId).subscribe({
      next: (reservation) => {
        this.reservation = reservation;
        this.updateSeatsAvailability(reservation.reservedSeats);

        this.numeroPostiDisponibili =
          this.hall.column * this.hall.row -
          this.reservation.reservedSeats.length;
      },
      error: (err) => console.log(err),
    });
  }

  loadHall(projectionId: number) {
    this.hallService.getHallByProjectionId(projectionId).subscribe({
      next: (hall) => {
        this.hall = hall;
        for (let i = 0; i < this.hall.row; i++) {
          this.seats[i] = Array<number>(this.hall.column).fill(0);
        }
        this.loadReservation(this.projectionId);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  loadFilmDetails(projectionId: number) {
    this.filmService.getFilmDetailsByProjectionId(projectionId).subscribe({
      next: (film) => {
        this.filmDetails = film;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  updateSeatsAvailability(reservation: number[]) {
    for (let r of reservation) {
      let x = Math.floor((r - 1) / this.hall.column); // Vertical
      let y = Math.floor((r - 1) % this.hall.column); // Horizontal
      this.seats[x][y] = -1;
    }
  }

  createReservation() {
    this.reservationData.idProjection = this.projectionId;
    this.reservationData.reservedSeats = this.seatId;
    let coordinates: String[] = [];

    for (let s of this.seatId) {
      if (this.discountCounter > 0) {
        this.reservationData.discount = true;
        this.reservationData.seatNumber = s;

        coordinates.push(this.getCoordinate(s));
        this.updateSeatsAvailability(this.reservationData.reservedSeats);
        this.hallService.addReservation(this.reservationData).subscribe({
          next: () => {
            console.log('Posti selezionati ' + this.seatId);
          },
          error: (error) => {
            console.log('Errore: ' + error);
          },
        });
        this.discountCounter--;
      } else {
        this.reservationData.discount = false;
        this.reservationData.seatNumber = s;
        coordinates.push(this.getCoordinate(s));
        this.updateSeatsAvailability(this.reservationData.reservedSeats);
        this.hallService.addReservation(this.reservationData).subscribe({
          next: () => {
            console.log('Posti selezionati ' + this.seatId);
          },
          error: (error) => {
            console.log('Errore: ' + error);
          },
        });
      }
    }

    this.router.navigate(['/payment-confirm']);
  }

  getCoordinate(id: number): string {
    const lettera = String.fromCharCode(65 + (id - 1) / this.hall.column);
    const numero = ((id - 1) % this.hall.column) + 1;
    return lettera + numero;
  }

  checkUser(): boolean {
    this.user = this.authService.checkStatus();
    return this.user !== null;
  }
  setDiscount(event: Event, s: number) {
    this.discountCounter++;
    this.booleanArray[s] = true;
    console.log(this.booleanArray);
    this.totalPrice = this.totalPrice - this.projection.ticketPrice / 2;
  }
  reverseSetDiscount(event: Event, s: number) {
    this.discountCounter--;
    this.booleanArray[s] = false;
    this.totalPrice = this.totalPrice + this.projection.ticketPrice / 2;
  }

  navigateToFilmDetail(filmId: number) {
    this.router.navigate(['/films', filmId]);
  }
}
