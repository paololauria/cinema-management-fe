import { Component, OnInit } from '@angular/core';
import { FilmDto } from '../../../../../model/film-dto';
import { GenreDto } from '../../../../../model/genre-dto';
import { FilmService } from '../../../../../services/film/film.service';

@Component({
  selector: 'app-genre-filter',
  templateUrl: './genre-filter.component.html',
  styleUrls: ['./genre-filter.component.css'],
})
export class GenreFilterComponent implements OnInit {
  genres: GenreDto[] = [];
  films: FilmDto[] = [];
  genreClicked = false;
  selectedGenre: string = '';

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.loadGenres();
  }

  loadGenres(): void {
    this.filmService.getAllGenres().subscribe(
      (data) => {
        this.genres = data;
      },
      (error) => {
        console.error('Error loading genres', error);
      }
    );
  }

  loadFilmsByGenre(genre: string): void {
    this.genreClicked = true;
    this.selectedGenre = genre;
    this.filmService.getFilmsByGenre(genre).subscribe(
      (data) => {
        this.films = data;
      },
      (error) => {
        console.error('Error loading films by genre', error);
      }
    );
  }

  getGenreEmoji(genre: string): string {
    return this.filmService.getGenreEmoji(genre);
  }
}
