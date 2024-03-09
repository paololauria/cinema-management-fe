import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilmProjectionDto } from '../../../../model/film-projection-dto';

@Component({
  selector: 'app-all-film-projection-next-week',
  templateUrl: './all-film-projection-next-week.component.html',
  styleUrls: ['./all-film-projection-next-week.component.css'],
})
export class AllFilmProjectionNextWeekComponent implements OnInit {
  ngOnInit(): void {}
  @Input() filmsProjectionNextWeek: FilmProjectionDto[] = [];
  @Output() filmClicked: EventEmitter<number> = new EventEmitter<number>();
  onFilmClick(filmProjectionId: number) {
    this.filmClicked.emit(filmProjectionId);
  }
}
