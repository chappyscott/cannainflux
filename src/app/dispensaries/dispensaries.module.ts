// Angular core
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// Shared
import { SharedModule } from '../shared/shared.module';

// Component Imports
import { DispensariesListComponent } from './dispensaries-list.component';
//import { DispensariesDetailComponent } from './dispensaries-detail.component';
//import { DispensariesEditComponent } from './dispensaries-edit.component';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'dispensaries', component: DispensariesListComponent }, //,
      //{ path: 'dispensaries/:id', component: DispensariesDetailComponent },
      /*{
        path: 'dispensaries/:id/edit',
        component: DispensariesEditComponent
      }*/
    ]),
  ],
  declarations: [
    DispensariesListComponent, //,
    //DispensariesEditComponent,
    //DispensariesDetailComponent
  ],
  exports: [FormsModule],
})
export class DispensariesModule {}
