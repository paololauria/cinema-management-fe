import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AllFilmProjectionTodayComponent } from './all-film-projection-today/all-film-projection-today.component';
import { FaqComponent } from './faq/faq.component';
import { HallProjectionTodayComponent } from './hall-projection-today/hall-projection-today.component';
import { PartnersComponent } from './partners/partners.component';
import { RouterModule, Routes } from '@angular/router';

const homeRoutes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [
    HomeComponent,
    AllFilmProjectionTodayComponent,
    HallProjectionTodayComponent,
    FaqComponent,
    PartnersComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(homeRoutes),
  ],
  exports: [
    HomeComponent,
    AllFilmProjectionTodayComponent,
    HallProjectionTodayComponent,
    FaqComponent,
    PartnersComponent,
  ],
})
export class HomeModule {}
