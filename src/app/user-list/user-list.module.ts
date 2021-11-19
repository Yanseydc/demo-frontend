import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserListRoutingModule } from './user-list-routing.module'
import { FormsModule } from '@angular/forms';

@NgModule({  
  imports: [
    CommonModule,
    UserListRoutingModule
  ],  
  declarations: [UserListComponent]
})
export class UserListModule { }
