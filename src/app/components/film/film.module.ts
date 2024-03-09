import { NgModule } from '@angular/core';
import { AllFilmComponent } from './all-film/all-film.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { TableProjectionFilmDetailsComponent } from './table-projection-film-details/table-projection-film-details.component';
import { Top10Component } from './top-10/top-10.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { GenreFilterComponent } from './genre/genre-filter/genre-filter.component';
import { ListGenreFilmComponent } from './genre/list-genre-film/list-genre-film.component';
import { RouterModule, Routes } from '@angular/router';

const filmRoutes: Routes = [
  { path: 'films', component: AllFilmComponent },
  { path: 'films/:id', component: FilmDetailsComponent },
  { path: 'genres', component: GenreFilterComponent },
  { path: 'top10', component: Top10Component },
];

@NgModule({
  declarations: [
    AllFilmComponent,
    FilmDetailsComponent,
    TableProjectionFilmDetailsComponent,
    Top10Component,
    GenreFilterComponent,
    ListGenreFilmComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(filmRoutes),
  ],
  exports: [
    AllFilmComponent,
    FilmDetailsComponent,
    TableProjectionFilmDetailsComponent,
    Top10Component,
    GenreFilterComponent,
    ListGenreFilmComponent,
  ],
})
export class FilmModule {}
