import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilmService } from '../../../../../../services/film/film.service';
import { AdminService } from '../../../../../../services/admin/admin.service';
import { FilmDetailsDto } from '../../../../../../model/film-details-dto';

@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
  styleUrls: ['./update-film.component.css'],
})
export class UpdateFilmComponent implements OnInit {
  filmId!: number;
  filmForm!: FormGroup;
  filmData!: FilmDetailsDto;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private filmService: FilmService,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.filmId = +params['id'];
    });

    this.filmForm = this.formBuilder.group({
      title: [''],
      director: [''],
      releaseYear: [''],
      posterImage: [''],
      description: [''],
      duration: [''],
    });

    this.filmService.getFilmDetailsById(this.filmId).subscribe({
      next: (filmDetails) => {
        this.filmData = filmDetails;
        this.populateForm();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  populateForm() {
    this.filmForm.patchValue({
      title: this.filmData.title,
      director: this.filmData.director,
      releaseYear: this.filmData.releaseYear,
      posterImage: this.filmData.posterImage,
      description: this.filmData.description,
      duration: this.filmData.duration,
    });
  }

  updateFilm() {
    if (this.filmForm.valid) {
      const updatedFilmData = { id: this.filmId, ...this.filmForm.value };
      this.adminService.updateFilm(this.filmId, updatedFilmData).subscribe({
        next: () => {
          alert('Updated!');
          this.router.navigate(['/admin/films']);
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      alert('Not valid!');
    }
  }
}
