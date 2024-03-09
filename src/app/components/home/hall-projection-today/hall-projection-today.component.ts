import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FilmProjectionDto } from '../../../../model/film-projection-dto';
import { FilmProjectionService } from '../../../../services/film-projection/film-projection.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-hall-projection-today',
  templateUrl: './hall-projection-today.component.html',
  styleUrl: './hall-projection-today.component.css',
})
export class HallProjectionTodayComponent {
  @Input() hallNumber!: number;
  filmsProjectionToday: FilmProjectionDto[] = [];
  currentDayAndDate: string = '';

  constructor(
    private router: Router,
    private filmProjectionService: FilmProjectionService
  ) {}

  ngOnInit(): void {
    this.getCurrentDayAndDate();
    this.fetchFilmsProjectionToday();
  }

  getCurrentDayAndDate(): void {
    const today = new Date();
    this.currentDayAndDate = formatDate(today, 'd MMMM y, EEEE', 'en-US');
  }

  fetchFilmsProjectionToday() {
    this.filmProjectionService.getAllFilmsProjectionToday().subscribe({
      next: (films) => {
        this.filmsProjectionToday = films.filter(
          (f) => f.hallId === this.hallNumber
        );
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
