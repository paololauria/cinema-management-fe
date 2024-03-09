import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AllFilmProjectionNextWeekComponent } from './all-film-projection-next-week/all-film-projection-next-week.component';
import { AllFilmProjectionComponent } from './all-film-projection.component';
import { RouterModule, Routes } from '@angular/router';

const showtimesRoutes: Routes = [
  { path: 'projection', component: AllFilmProjectionComponent },
];

@NgModule({
  declarations: [
    AllFilmProjectionNextWeekComponent,
    AllFilmProjectionComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(showtimesRoutes),
  ],
  exports: [AllFilmProjectionNextWeekComponent, AllFilmProjectionComponent],
})
export class ShowtimesModule {}
