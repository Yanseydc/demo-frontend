import { HttpErrorResponse } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
// spublic users!: User[];    
    //constructor(private userService: UserService) {}
    constructor() {}
    //on load call the users
    //ngOnInit() {
        //this.getUsers();        
    //}

    // public getUsers(): void {
    //     this.userService.getUsers().subscribe(             
    //         (res: User[]) => {
    //             this.users = res;
    //         },
    //         (err: HttpErrorResponse) => {
    //             console.log(err.message);
    //         });
    // }

    // public onAddUser(userForm: NgForm): void {
    //     this.userService.newUser(userForm.value).subscribe(
    //         (res: User) => {
    //             console.log(res);
    //             this.userService.getUsers();
    //         },
    //         (err: HttpErrorResponse) => {
    //             alert(err.message);
    //         },

    //     );
    // }

}
