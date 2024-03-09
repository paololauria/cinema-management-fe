import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmProjectionDto } from '../../../model/film-projection-dto';
import { FilmProjectionService } from '../../../services/film-projection/film-projection.service';

@Component({
  selector: 'app-all-film-projection',
  templateUrl: './all-film-projection.component.html',
  styleUrls: ['./all-film-projection.component.css'],
})
export class AllFilmProjectionComponent implements OnInit {
  filmsProjectionPast: FilmProjectionDto[] = [];
  filmsProjectionNextWeek: FilmProjectionDto[] = [];

  constructor(
    private filmProjectionService: FilmProjectionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchFilmsProjectionPast();
    this.fetchFilmProjectionNextWeek();
  }

  fetchFilmsProjectionPast() {
    this.filmProjectionService.getAllFilmsProjectionPast().subscribe({
      next: (films) => {
        console.log(films);
        this.filmsProjectionPast = films;
      },
      error: (err) => console.log(err),
    });
  }

  fetchFilmProjectionNextWeek() {
    this.filmProjectionService.getAllFilmsProjectionNextWeek().subscribe({
      next: (films) => {
        this.filmsProjectionNextWeek = films;
      },
      error: (error) => {
        console.error('Error: ', error);
      },
    });
  }

  navigateToProjectionDetail(projectionId: number) {
    this.router.navigate(['/reservation', projectionId]);
  }
}
