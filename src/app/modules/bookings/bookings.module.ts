import { TotalPanelComponent } from './../../shared/components/total-panel/total-panel.component';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppCalendarComponent } from './component/app-calendar/app-calendar.component';
import { MatInputModule, 
  MatStepperModule, 
  MatFormFieldModule, 
  MatDatepickerModule, 
  MatNativeDateModule, 
  MatCheckboxModule, 
  MatListModule, 
  MatRadioModule} from '@angular/material';
import { StepperComponent } from 'src/app/shared/components/stepper/stepper.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AvailabilityPanelComponent } from './component/availability-panel/availability-panel.component';
import { DatepickerComponent } from 'src/app/shared/components/datepicker/datepicker.component';
import { AvailabilityCheckboxComponent } from './component/availability-checkbox/availability-checkbox.component';
import { BookingsContainerComponent } from './container/bookings.component';
import { UnitInformationComponent } from './component/unit-information/unit-information.component';
import { UnitDirectoryComponent } from './component/unit-directory/unit-directory.component';
import { UnitInformationPanelComponent } from './component/unit-information-panel/unit-information-panel.component';
import { PanelNavComponent } from 'src/app/shared/components/panel-nav/panel-nav.component';
import { UnitServiceCardComponent } from './component/unit-service-card/unit-service-card.component';
import { SearchComponent } from 'src/app/shared/components/search/search.component';
import { UnitServicesContainerComponent } from './component/unit-services/unit-services.component';
import { UnitServicePanelComponent } from './component/unit-service-panel/unit-service-panel.component';
import { UnitGuestComponent } from './component/unit-guest/unit-guest.component';
import { UnitGuestPanelComponent } from './component/unit-guest-panel/unit-guest-panel.component';
import { OrderSummaryComponent } from './component/order-summary/order-summary.component';


const materialModules = [
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatListModule,
  MatRadioModule,
 ]

const routes: Routes = [
  {
    path: '',
    component: BookingsContainerComponent,
    children: []
  }
];

@NgModule({
  declarations: [
    BookingsContainerComponent,
    AppCalendarComponent,
    StepperComponent,
    AvailabilityPanelComponent,
    DatepickerComponent,
    AvailabilityCheckboxComponent,
    UnitInformationComponent,
    UnitDirectoryComponent,
    UnitInformationPanelComponent,
    TotalPanelComponent,
    PanelNavComponent,
    UnitServicesContainerComponent,
    UnitServiceCardComponent,
    SearchComponent,
    UnitServicePanelComponent,
    UnitGuestComponent,
    UnitGuestPanelComponent,
    OrderSummaryComponent,

  ],

  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ...materialModules,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [],
})
export class AppBookingModule { }
