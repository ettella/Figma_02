import { Router, ActivatedRoute } from '@angular/router';
import { BookingData } from 'src/app/shared/models/booking-data.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject, SubjectLike } from 'rxjs';

@Component({
  selector: 'app-booking-item',
  templateUrl: './booking-item.component.html',
  styleUrls: ['./booking-item.component.scss']
})
export class BookingItemComponent implements OnInit {

  @Input() booking!: BookingData;
  @Output() placeSelected = new EventEmitter<void>();
  @Input() index!: number;

  isVisible: boolean = false;

  constructor(
    private router: Router, 
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
  }

  onSelected() {
    this.placeSelected.emit();
  }

  onClose() {
    this.router.navigate(['list'], {relativeTo: this.route});
  }

  onBooked(){
    console.log('Booked successfully!')
  }



}
