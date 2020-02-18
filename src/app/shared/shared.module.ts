import { NgModule } from '@angular/core';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import {MatMenuModule} from '@angular/material';
import { TopNavComponent } from './components/top-nav/top-nav.component';



const materialModules = [
     MatMenuModule,
    ]

@NgModule({
  declarations: [
    TopNavComponent,
    DropdownMenuComponent,
  ],
  imports: [
    ...materialModules,
  ],

  exports:[
      TopNavComponent,
      DropdownMenuComponent,
  ],

  providers: [],
})
export class SharedModule { }
