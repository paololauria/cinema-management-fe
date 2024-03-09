import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilmService } from '../../../../../services/film/film.service';
import { FilmDetailsDto } from '../../../../../model/film-details-dto';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  films: FilmDetailsDto[] = [];
  filteredMovies: FilmDetailsDto[] = [];
  suggestions: FilmDetailsDto[] = [];
  suggestionsVisible: boolean = true;

  constructor(private filmService: FilmService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchValue: '',
    });
  }

  ngOnInit() {}

  onSearchSubmit() {
    const searchTerm = this.searchForm.value.searchValue;
  }

  searchMovies() {
    const searchTerm = this.searchForm.value.searchValue;
    this.filmService.searchMoviesByTitle(searchTerm).subscribe(
      (data: FilmDetailsDto[]) => {
        this.films = data;
        this.suggestionsVisible = true;
      },
      (error) => {
        console.error('Error fetching search results:', error);
      }
    );
  }

  searchSuggestions() {
    const searchTerm = this.searchForm.value.searchValue;
    if (searchTerm.trim() !== '') {
      this.filmService.getSearchSuggestions(searchTerm).subscribe(
        (suggestions: FilmDetailsDto[]) => {
          this.suggestions = suggestions;
          this.suggestionsVisible = true; 
        },
        (error) => {
          console.error('Error: ', error);
        }
      );
    } else {
      this.suggestions = [];
      this.suggestionsVisible = false; 
    }
  }

  selectMovie(selectedMovie: FilmDetailsDto) {
    console.log('Movie selected: ', selectedMovie);
    this.searchForm.patchValue({ searchValue: selectedMovie.title });
    this.filteredMovies = [];
    this.suggestionsVisible = false;
  }
}
