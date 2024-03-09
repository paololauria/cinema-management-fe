import { Component, Input } from '@angular/core';
import { FilmDto } from '../../../../../model/film-dto';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-genre-film',
  templateUrl: './list-genre-film.component.html',
  styleUrls: ['./list-genre-film.component.css'],
})
export class ListGenreFilmComponent {
  @Input() films: FilmDto[] = [];
  constructor(private router: Router) {}

  navigateToFilmDetail(filmId: number) {
    this.router.navigate(['/films', filmId]);
  }
}
