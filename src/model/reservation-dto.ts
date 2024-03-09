export interface ReservationDto {
  projectionId: number;
  filmTitle: String;
  idHall: number;
  hallName: string;
  projectionDate: String;
  projectionTime: string;
  seatNumber: number;
  reservedSeats: number[];
  discount: boolean;
  posterImage: string;
}
