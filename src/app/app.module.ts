import { AlertComponent } from './ui-tools/alert/alert.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BookingComponent } from './pages/booking/booking.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

import { InputComponent } from './ui-tools/input/input.component';
import { BookingListComponent } from './pages/booking/booking-list/booking-list.component';
import { BookingItemComponent } from './pages/booking/booking-list/booking-item/booking-item.component';
import { BookingDetailComponent } from './pages/booking/booking-detail/booking-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    BookingComponent,

    InputComponent,
    AlertComponent,
    
    BookingListComponent,
    BookingItemComponent,
    BookingDetailComponent,
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
