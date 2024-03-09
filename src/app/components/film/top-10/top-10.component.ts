import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../../../services/film/film.service';
import { FilmDetailsDto } from '../../../../model/film-details-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-10',
  templateUrl: './top-10.component.html',
  styleUrl: './top-10.component.css',
})
export class Top10Component implements OnInit {
  top10Films: FilmDetailsDto[] = [];

  constructor(private filmService: FilmService, private router: Router) {}

  ngOnInit(): void {
    this.loadTop10Films();
  }

  loadTop10Films(): void {
    this.filmService.getTop10Films().subscribe({
      next: (films) => {
        this.top10Films = films;
        console.log(this.top10Films);
      },
      error: (error) => {
        console.error('Error fetching top 10 films:', error);
      },
    });
  }

  navigateToFilmDetail(filmId: number) {
    this.router.navigate(['/films', filmId]);
  }
}
