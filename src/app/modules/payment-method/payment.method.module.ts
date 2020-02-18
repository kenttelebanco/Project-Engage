import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaymentMethodContainerComponent } from './container/payment-method.component';
import { PaymentCardComponent } from './component/payment-card/payment-card.component';
import { MatCheckboxModule, MatExpansionModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { PaymentMethodSummaryComponent } from './component/payment-method-summary/payment-method-summary.component';
import { PayNowComponent } from 'src/app/shared/components/pay-now/pay-now.component';



const materialModules = [
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
 ]

const routes: Routes = [
  {
    path: '',
    component: PaymentMethodContainerComponent,
    children: []
  }
];

@NgModule({
  declarations: [
    PaymentMethodContainerComponent,
    PaymentCardComponent,
    PaymentMethodSummaryComponent,
    PayNowComponent,
  ],

  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ...materialModules,
    FormsModule, 
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [],
})
export class PaymentMethodModule { }
