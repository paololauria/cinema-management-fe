import { Component, OnInit } from '@angular/core';
import { HallDto } from '../../../model/hall-dto';
import { HallService } from '../../../services/hall/hall.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  halls: HallDto[] = [];

  constructor(
    private hallService: HallService,
  ) {}

  ngOnInit() {
    this.fetchAllHalls();
  }

  fetchAllHalls() {
    this.hallService.getAllHalls().subscribe({
      next: (a) => {
        this.halls = a;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
