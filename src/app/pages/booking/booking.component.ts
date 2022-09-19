import { BookingData } from 'src/app/shared/models/booking-data.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  selectedPlace!: BookingData;
  bookingDetail!: BookingData[];
  
  constructor() { }

  ngOnInit() {
  }

  

}