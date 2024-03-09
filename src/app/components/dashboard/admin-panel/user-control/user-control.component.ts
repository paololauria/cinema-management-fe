import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../../services/admin/admin.service';
import { FilmService } from '../../../../../services/film/film.service';
import { AuthService } from '../../../../../services/auth/auth.service';
import { FilmDetailsDto } from '../../../../../model/film-details-dto';
import { UserService } from '../../../../../services/user/user.service';
import { UserDto } from '../../../../../model/user-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrl: './user-control.component.css',
})
export class UserControlComponent implements OnInit {
  allFilms: FilmDetailsDto[] = [];
  allUser: UserDto[] = [];

  constructor(
    private adminService: AdminService,
    private filmService: FilmService,
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.fetchAllUser();
    this.authService.checkLocalStorage();
  }

  fetchAllUser() {
    this.userService.getAllUser().subscribe({
      next: (user) => {
        this.allUser = user;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  deleteUser(userId: number) {
    this.adminService.deleteUserById(userId).subscribe({
      next: () => {
        this.allUser = this.allUser.filter((u) => u.id != userId);
        alert('Eliminated successfully!');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  createFilm() {
    this.router.navigate(['/admin/films/create']);
  }
}
