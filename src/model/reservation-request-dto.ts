export interface ReservationRequestDto {
  idProjection: number;
  seatNumber: number;
  reservedSeats: number[];
  discount: boolean;
}
