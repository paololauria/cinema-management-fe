import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { FilmProjectionDto } from '../../../../model/film-projection-dto';


@Component({
  selector: 'app-all-film-projection-today',
  templateUrl: './all-film-projection-today.component.html',
  styleUrls: ['./all-film-projection-today.component.css'],
})
export class AllFilmProjectionTodayComponent {
  ngOnInit(): void {}
  @Input() filmsProjectionToday: FilmProjectionDto[] = [];
  @Output() filmClicked: EventEmitter<number> = new EventEmitter<number>();
  @Output() generateProjections: EventEmitter<void> = new EventEmitter<void>();

  onFilmClick(filmProjectionId: number) {
    this.filmClicked.emit(filmProjectionId);
  }

  onGenerateProjectionsClick() {
    this.generateProjections.emit();
  }
}
