import { FeedbackDto } from './feedback-dto';
import { ReservationDto } from './reservation-dto';

export interface UserDto {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  birthdate: string;
  reservationDtoList: ReservationDto[];
  feedbackDtoList: FeedbackDto[];
}
