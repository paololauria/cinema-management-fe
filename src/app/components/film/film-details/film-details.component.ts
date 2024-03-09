import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmDetailsDto } from '../../../../model/film-details-dto';
import { FilmService } from '../../../../services/film/film.service';
import { AuthService } from '../../../../services/auth/auth.service';
import { User } from '../../../../model/user';
import { UserService } from '../../../../services/user/user.service';
import { FeedbackDto } from '../../../../model/feedback-dto';
import { OmdbApiService } from '../../../../services/omdb.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css'],
})
export class FilmDetailsComponent implements OnInit {
  filmDetails!: FilmDetailsDto;
  userFd!: User;
  user: User | null = null;
  feedbackForm!: FormGroup;
  feedBackData: FeedbackDto = {
    filmTitle: '',
    userId: 0,
    userName: '',
    posterImage: '',
    rating: 0,
    comment: '',
  };
  filmId!: number;
  feedbackResult!: FeedbackDto[];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private filmService: FilmService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private omdbService: OmdbApiService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const movieTitle = params['title'];
      this.getMovieDetails(movieTitle);
    });

    this.route.params.subscribe((params) => {
      this.filmId = +params['id'];
      this.loadFilmDetails(+params['id']);
      this.fecthAllFeedbackById(this.filmId);
    });
    this.feedbackForm = this.formBuilder.group({
      rating: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }

  loadFilmDetails(filmId: number) {
    this.filmService.getFilmDetailsById(filmId).subscribe({
      next: (details) => {
        this.filmDetails = details;
        console.log(this.filmDetails.actorDto);
      },
      error: (err) => {
        console.log('Error fetching film details:', err);
      },
    });
  }
  checkUser(): boolean {
    this.user = this.authService.checkStatus();
    return this.user !== null;
  }
  createFeedback() {
    if (this.feedbackForm.valid) {
      this.feedBackData = { ...this.feedbackForm.value };
      console.log(this.feedBackData);
      this.userService.addFeedback(this.feedBackData, this.filmId).subscribe({
        next: (fd) => {
          alert('Feedback added successfully: ' + this.feedBackData.rating);
          this.fecthAllFeedbackById(this.filmId);
        },
        error: (error) => {
          console.log('error' + error);
        },
      });
    } else {
      alert('Not valid!');
    }
  }

  fecthAllFeedbackById(filmId: number) {
    this.filmService.getFeedbackById(filmId).subscribe({
      next: (details) => {
        this.feedbackResult = details;
        console.log(this.filmDetails);
      },
      error: (err) => {
        console.log('Error fetching feedback details:', err);
      },
    });
  }

  navigateToUserDetail(userId: number) {
    this.router.navigate(['/user/', userId]);
  }

  movieDetails: any;

  getMovieDetails(title: string): void {
    this.omdbService.getMovieDetails(title).subscribe((data) => {
      this.movieDetails = data;
    });
  }
}
