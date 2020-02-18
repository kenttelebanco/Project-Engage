import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageContainerComponent } from './container/landing-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { JumbotronComponent } from 'src/app/shared/components/jumbotron/jumbotron.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { ServiceCardComponent } from 'src/app/shared/components/service-card/service-card.component';
import { MatCardModule } from '@angular/material/card';


const materialModules = [
  MatCardModule,
 ]


const routes: Routes = [
  {
    path: '',
    component: LandingPageContainerComponent,
    children: []
  }
];

@NgModule({
  declarations: [
    LandingPageContainerComponent,
    JumbotronComponent,
    FooterComponent,
    ServiceCardComponent,
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
export class LandingPageModule { }
