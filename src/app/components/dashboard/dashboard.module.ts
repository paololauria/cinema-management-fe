import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CreateFilmComponent } from './admin-panel/film-control/create-film/create-film.component';
import { UpdateFilmComponent } from './admin-panel/film-control/update-film/update-film.component';
import { FilmControlComponent } from './admin-panel/film-control/film-control.component';
import { CreateProjectionComponent } from './admin-panel/projection-control/create-projection/create-projection.component';
import { UpdateProjectionComponent } from './admin-panel/projection-control/update-projection/update-projection.component';
import { ProjectionControlComponent } from './admin-panel/projection-control/projection-control.component';
import { UserControlComponent } from './admin-panel/user-control/user-control.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../../../services/admin/admin.guard';

const dashboardRoutes: Routes = [
  {
    path: 'admin',
    component: AdminPanelComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'films', component: FilmControlComponent },
      { path: 'films/update/:id', component: UpdateFilmComponent },
      { path: 'films/create', component: CreateFilmComponent },
      { path: 'projections', component: ProjectionControlComponent },
      { path: 'projections/update/:id', component: UpdateProjectionComponent },
      { path: 'projections/create', component: CreateProjectionComponent },
      { path: 'user', component: UserControlComponent },
    ],
  },
  { path: 'user', component: UserPanelComponent },
  { path: 'user/:userId', component: UserPanelComponent },
];

@NgModule({
  declarations: [
    CreateFilmComponent,
    UpdateFilmComponent,
    FilmControlComponent,
    CreateProjectionComponent,
    UpdateProjectionComponent,
    ProjectionControlComponent,
    UserControlComponent,
    AdminPanelComponent,
    UserPanelComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
  ],
  exports: [
    CreateFilmComponent,
    UpdateFilmComponent,
    FilmControlComponent,
    CreateProjectionComponent,
    UpdateProjectionComponent,
    ProjectionControlComponent,
    UserControlComponent,
    AdminPanelComponent,
    UserPanelComponent,
  ],
})
export class DashboardModule {}
