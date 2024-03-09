import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  isFilmControlVisible: boolean = false;
  isProjectionControlVisible: boolean = false;
  isUserControlVisible: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  showFilmControl() {
    this.isFilmControlVisible = !this.isFilmControlVisible;

    if (this.isFilmControlVisible) {
      this.isProjectionControlVisible = false;
      this.isUserControlVisible = false;
      this.router.navigate(['/admin/films']);
    } else {
      this.router.navigate(['/admin']);
    }
  }

  showProjectionControl() {
    this.isProjectionControlVisible = !this.isProjectionControlVisible;

    if (this.isProjectionControlVisible) {
      this.isFilmControlVisible = false;
      this.isUserControlVisible = false;
      this.router.navigate(['/admin/projections']);
    } else {
      this.router.navigate(['/admin']);
    }
  }

  showUserControl() {
    this.isUserControlVisible = !this.isUserControlVisible;

    if (this.isUserControlVisible) {
      this.isFilmControlVisible = false;
      this.isProjectionControlVisible = false;
      this.router.navigate(['/admin/user']);
    } else {
      this.router.navigate(['/admin']);
    }
  }
}
