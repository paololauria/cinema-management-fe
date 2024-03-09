import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../../model/user';
@Component({
  selector: 'app-payment-confirm',
  templateUrl: './payment-confirm.component.html',
  styleUrl: './payment-confirm.component.css',
})
export class PaymentConfirmComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    let user: User | null;
    user = JSON.parse(localStorage.getItem('userData')!);
    setTimeout(() => {
      this.router.navigate(['/user/' + user?.id]);
    }, 3000);
  }
}
