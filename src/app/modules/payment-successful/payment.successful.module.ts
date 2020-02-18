import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaymentSuccessfulContainerComponent } from './container/payment-successful.component';



const materialModules = [
    MatCardModule,
 ]

const routes: Routes = [
  {
    path: '',
    component: PaymentSuccessfulContainerComponent,
    children: []
  }
];

@NgModule({
  declarations: [
    PaymentSuccessfulContainerComponent
  ],

  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ...materialModules,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [],
})
export class PaymentSuccessfulModule { }
