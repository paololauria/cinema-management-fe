import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../../../../../services/admin/admin.service';
import { FilmProjectionDto } from '../../../../../../model/film-projection-dto';
import { FilmProjectionService } from '../../../../../../services/film-projection/film-projection.service';

@Component({
  selector: 'app-update-projection',
  templateUrl: './update-projection.component.html',
  styleUrl: './update-projection.component.css',
})
export class UpdateProjectionComponent {
  projectionId!: number;
  projectionForm!: FormGroup;
  projectionData!: FilmProjectionDto;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private filmProjectionService: FilmProjectionService,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.projectionId = +params['id'];
    });

    this.projectionForm = this.formBuilder.group({
      filmTitle: [''],
      date: [''],
      time: [''],
      hallId: [''],
      posterImage: [''],
      duration: [''],
    });

    this.filmProjectionService
      .getFilmProjectionId(this.projectionId)
      .subscribe({
        next: (p) => {
          this.projectionData = p;
          this.populateForm();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  populateForm() {
    this.projectionForm.patchValue({
      filmTitle: this.projectionData.filmTitle,
      date: this.projectionData.date,
      time: this.projectionData.time,
      posterImage: this.projectionData.posterImage,
      hallId: this.projectionData.hallId,
      duration: this.projectionData.duration,
    });
  }

  updateProjection() {
    if (this.projectionForm.valid) {
      const updatedFilmData = {
        id: this.projectionId,
        ...this.projectionForm.value,
      };
      this.adminService
        .updateProjection(this.projectionId, updatedFilmData)
        .subscribe({
          next: () => {
            alert('Updated!');
            this.router.navigate(['/admin/projections']);
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
