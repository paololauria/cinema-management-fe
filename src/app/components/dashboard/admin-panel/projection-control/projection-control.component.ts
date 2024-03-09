import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FilmProjectionDto } from '../../../../../model/film-projection-dto';
import { AdminService } from '../../../../../services/admin/admin.service';
import { AuthService } from '../../../../../services/auth/auth.service';
import { FilmProjectionService } from '../../../../../services/film-projection/film-projection.service';

@Component({
  selector: 'app-projection-control',
  templateUrl: './projection-control.component.html',
  styleUrl: './projection-control.component.css',
})
export class ProjectionControlComponent {
  projections: FilmProjectionDto[] = [];

  constructor(
    private adminService: AdminService,
    private filmProjectionService: FilmProjectionService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.fetchAllProjection();
    this.authService.checkLocalStorage();
  }

  fetchAllProjection() {
    this.filmProjectionService.getAllProjections().subscribe({
      next: (films) => {
        this.projections = films;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  editProjection(projectionId: number) {
    this.router.navigate(['/admin/projections/update', projectionId]);
  }

  deleteProjection(projectionId: number) {
    this.adminService.deleteProjectionById(projectionId).subscribe({
      next: () => {
        this.projections = this.projections.filter((p) => p.id != projectionId);
        alert('Eliminated successfully!');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  createProjection() {
    this.router.navigate(['/admin/projections/create']);
  }
}
