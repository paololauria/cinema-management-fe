import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FilmProjectionDto } from '../../../../../../model/film-projection-dto';
import { AdminService } from '../../../../../../services/admin/admin.service';
import { AuthService } from '../../../../../../services/auth/auth.service';

@Component({
  selector: 'app-create-projection',
  templateUrl: './create-projection.component.html',
  styleUrls: ['./create-projection.component.css'],
})
export class CreateProjectionComponent implements OnInit {
  projectionForm!: FormGroup;
  projectionData: FilmProjectionDto = {
    id: 0,
    filmTitle: '',
    filmId: 0,
    date: new Date(),
    time: '',
    hallId: 0,
    hallName: '',
    posterImage: '',
    duration: 0,
    ticketPrice: 0,
    averageRating: 0,
    imdbRating: '',
  };

  constructor(
    private adminService: AdminService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.projectionForm = this.formBuilder.group({
      filmTitle: [''],
      filmId: ['', Validators.required],
      date: [new Date(), Validators.required],
      time: ['', Validators.required],
      hallId: [0, Validators.required],
      posterImage: ['', Validators.required],
      duration: [0, Validators.required],
      ticketPrice: [0, Validators.required],
    });
  }

  createProjection() {
    if (this.projectionForm.valid) {
      this.projectionData = { ...this.projectionForm.value };
      this.adminService.addProjection(this.projectionData).subscribe({
        next: () => {
          alert('Success: ' + this.projectionData.filmTitle);
          this.router.navigate(['/admin/projections']);
        },
        error: (error) => {
          console.log('Error: ' + error);
          console.log(this.projectionData);
        },
      });
    } else {
      alert('Not valid!');
    }
  }
}
