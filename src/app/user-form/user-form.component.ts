import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
    
    @Input()
    public title!: string;    
    public editUser!: User;

    constructor(
        private userService: UserService,         
        private router: Router,        
    ) { }
    
    ngOnInit(): void {
        console.log('ini')
        let getUser = localStorage.getItem("user");
        this.editUser = JSON.parse(getUser?getUser: "{}");           
        this.title = localStorage.length != 0 ? 'Update User' : 'Create User';
    }

    userFormSubmit(userForm: NgForm): void {
        if(localStorage.length == 0) {
            this.handleResponse(this.userService.newUser(userForm.value));            
        } else {            
            this.handleResponse(this.userService.updateUser(userForm.value, this.editUser.id));
        }
    }

    handleResponse(call : Observable<User>) {
        call.subscribe(
            (res: User) => {                
                this.router.navigate(['/','users']);                
            },
            (err: HttpErrorResponse) => {
                confirm(err.message);
            }
        )
    }

}
