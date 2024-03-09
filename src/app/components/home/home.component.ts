import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { FilmProjectionService } from '../../../services/film-projection/film-projection.service';
import { FilmProjectionDto } from '../../../model/film-projection-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  filmProjectionToday: FilmProjectionDto[] = [];
  projectionsGenerated: boolean = false;

  constructor(
    private router: Router,
    private filmProjectionService: FilmProjectionService
  ) {}

  ngOnInit(): void {
    this.fetchFilmsProjectionToday();
  }

  fetchFilmsProjectionToday() {
    this.filmProjectionService.getAllFilmsProjectionToday().subscribe({
      next: (films) => {
        this.filmProjectionToday = films;
      },
      error: (error) => {
        console.error('Errore recupero', error);
      },
    });
  }

  generateProjections() {
    this.filmProjectionService.generateDailyProjections().subscribe(
      (response) => {
        this.projectionsGenerated = true;
        this.fetchFilmsProjectionToday();
      },
      (error) => {}
    );
  }

  navigateToProjectionDetail(projectionId: number) {
    this.router.navigate(['/reservation', projectionId]);
  }
}
