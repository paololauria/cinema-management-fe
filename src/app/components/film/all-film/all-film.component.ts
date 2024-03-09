import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmDto } from '../../../../model/film-dto';
import { FilmService } from '../../../../services/film/film.service';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-all-film',
  templateUrl: './all-film.component.html',
  styleUrls: ['./all-film.component.css'],
})
export class AllFilmComponent implements OnInit {
  allFilms: FilmDto[] = [];

  constructor(
    private filmService: FilmService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.fetchAllFilms();
    this.authService.checkLocalStorage();
  }

  fetchAllFilms() {
    this.filmService.getAllFilms().subscribe({
      next: (films) => {
        this.allFilms = films;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  navigateToFilmDetail(filmId: number) {
    this.router.navigate(['/films', filmId]);
  }
}
