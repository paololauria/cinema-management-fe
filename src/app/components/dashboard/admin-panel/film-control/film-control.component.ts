import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from '../../../../../services/film/film.service';
import { AuthService } from '../../../../../services/auth/auth.service';
import { FilmDetailsDto } from '../../../../../model/film-details-dto';
import { AdminService } from '../../../../../services/admin/admin.service';
@Component({
  selector: 'app-film-control',
  templateUrl: './film-control.component.html',
  styleUrls: ['./film-control.component.css'],
})
export class FilmControlComponent implements OnInit {
  allFilms: FilmDetailsDto[] = [];

  constructor(
    private adminService: AdminService,
    private filmService: FilmService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.fetchAllFilms();
    this.authService.checkLocalStorage();
  }

  fetchAllFilms() {
    this.filmService.getAllFilmsDetails().subscribe({
      next: (films) => {
        this.allFilms = films;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  editFilm(filmId: number) {
    this.router.navigate(['/admin/films/update', filmId]);
  }

  deleteFilm(filmId: number) {
    this.adminService.deleteFilmById(filmId).subscribe({
      next: () => {
        this.allFilms = this.allFilms.filter((p) => p.id != filmId);

        alert('Eliminated successfully');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  createFilm() {
    this.router.navigate(['/admin/films/create']);
  }
}
