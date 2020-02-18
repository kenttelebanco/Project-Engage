import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


const routes: Routes = [
      { path: '', loadChildren: () => import('./modules/landing-page/landing-page.module').then(m => m.LandingPageModule) },
      { path: 'app-bookings', loadChildren: () => import('./modules/bookings/bookings.module').then(m => m.AppBookingModule) },
      { path: 'payment-method', loadChildren: () => import('./modules/payment-method/payment.method.module').then(m => m.PaymentMethodModule) },
      { path: 'payment-successful', loadChildren: () => import('./modules/payment-successful/payment.successful.module').then(m => m.PaymentSuccessfulModule) },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
