// import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  closed: boolean = false;

  @Input() done: boolean = false;

  // isVisible: boolean = false;


  constructor(
    
    )
     { }

  ngOnInit(): void {
    // setTimeout(() => this.closed = true, 3000)
  }

  // showMessage(): void {
  //   this.isVisible = true;
  //   setTimeout(() => this.isVisible = false, 3000)
  // }

  onClose(){
    this.closed = true;
    // return this.done = true
  }


}
