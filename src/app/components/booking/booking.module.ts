import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HallComponent } from './hall/hall.component';
import { PaymentConfirmComponent } from './payment-confirm/payment-confirm.component';
import { BookingComponent } from './booking.component';
import { RouterModule, Routes } from '@angular/router';

const bookingRoutes: Routes = [
  { path: 'hall', component: BookingComponent },
  { path: 'payment-confirm', component: PaymentConfirmComponent },
  { path: 'reservation/:projectionId', component: HallComponent },
];

@NgModule({
  declarations: [HallComponent, PaymentConfirmComponent, BookingComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(bookingRoutes),
  ],
  exports: [HallComponent, PaymentConfirmComponent, BookingComponent],
})
export class BookingModule {}
