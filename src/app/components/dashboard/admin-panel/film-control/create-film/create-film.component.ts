import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FilmDetailsDto } from '../../../../../../model/film-details-dto';
import { FilmService } from '../../../../../../services/film/film.service';
import { AuthService } from '../../../../../../services/auth/auth.service';
import { Actor } from '../../../../../../model/actors-dto';

@Component({
  selector: 'app-create-film',
  templateUrl: './create-film.component.html',
  styleUrls: ['./create-film.component.css'],
})
export class CreateFilmComponent implements OnInit {
  actors: Actor[] = [];
  actorData: Actor = {
    id: 0,
    actorName: '',
    actorImg: '',
    roleName: '',
  };

  actorForm!: FormGroup;
  filmForm!: FormGroup;
  filmData: FilmDetailsDto = {
    id: 0,
    title: '',
    director: '',
    releaseYear: 0,
    posterImage: '',
    description: '',
    duration: '',
    awards: '',
    boxOffice: '',
    actors: [''],
    imdbRating: '',
    imdbVotes: '',
    averageRating: 0,
    actorDto: [{ id: 0, actorName: '', actorImg: '', roleName: '' }],
  };
  input!: any[];

  constructor(
    private filmService: FilmService,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  addActor() {
    if (this.actorForm.valid) {
      this.actorData = { ...this.actorForm.value };
      this.actors.push(this.actorData);
    }
    this.input.push({ value: '' });
  }
  ngOnInit(): void {
    this.authService.checkLocalStorage();
    this.filmForm = this.formBuilder.group({
      title: ['', Validators.required],
      director: [''],
      releaseYear: [''],
      posterImage: [''],
      description: [''],
      duration: [''],
      actorsDto: [this.actors],
    });
  }

  createFilm() {
    if (this.filmForm.valid) {
      this.filmData = { ...this.filmForm.value };
      console.log(this.filmData);
      this.filmService.addFilm(this.filmData).subscribe({
        next: (fd) => {
          alert('Success: ' + this.filmData.title);
          this.router.navigate(['/admin/films']);
        },
        error: (error) => {
          console.log('error' + error);
        },
      });
    } else {
      alert('Not valid!');
    }
  }
}
