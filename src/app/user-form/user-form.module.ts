import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form.component'
import { UserFormRoutingModule } from './user-form-routing.module'


@NgModule({  
  imports: [
    CommonModule,    
    FormsModule,
    UserFormRoutingModule
  ],
  declarations: [ UserFormComponent ]
})
export class UserFormModule { }
