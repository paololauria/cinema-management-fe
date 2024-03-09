import { Component } from '@angular/core';
import { FilmProjectionDto } from '../../../../model/film-projection-dto';
import { FilmProjectionService } from '../../../../services/film-projection/film-projection.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-table-projection-film-details',
  templateUrl: './table-projection-film-details.component.html',
  styleUrl: './table-projection-film-details.component.css',
})
export class TableProjectionFilmDetailsComponent {
  filmProjections: FilmProjectionDto[] = [];
  filmId!: number;

  constructor(
    private route: ActivatedRoute,
    private filmProjectionService: FilmProjectionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.filmId = +params['id'];
      this.fetchAllProjectionsByFilmId(this.filmId);
    });
  }

  fetchAllProjectionsByFilmId(filmId: number) {
    this.filmProjectionService.getAllFilmProjectionsByFilmId(filmId).subscribe({
      next: (details) => {
        this.filmProjections = details;
      },
      error: (err) => {
        console.log('Error:', err);
      },
    });
  }
  navigateToProjectionDetail(projectionId: number) {
    this.router.navigate(['/reservation', projectionId]);
  }
}
