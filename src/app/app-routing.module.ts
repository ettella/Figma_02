import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingDetailComponent } from './pages/booking/booking-detail/booking-detail.component';
import { BookingListComponent } from './pages/booking/booking-list/booking-list.component';
import { BookingComponent } from './pages/booking/booking.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  { path: 'booking', 
    component: BookingComponent,
  children:[
    {path:'', component:BookingDetailComponent},
    {path:'list', component:BookingListComponent}]}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
