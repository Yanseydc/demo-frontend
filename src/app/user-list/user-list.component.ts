import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users!: User[];    
  constructor(
    private userService: UserService,
    private router: Router    
    ) {}

  //on load call the users
  ngOnInit(): void {
      this.getUsers();
      localStorage.clear();    
  }

  public getUsers(): void {        
      this.userService.getUsers().subscribe(             
          (res: User[]) => {
              this.users = res;
          },
          (err: HttpErrorResponse) => {
              confirm(err.message);
          });
  }

  public onDeleteUser(objectId: string):void {	  
      	this.userService.deleteUser(objectId).subscribe(
			(res: void) => {
				console.log(res);
				this.getUsers();
			},
			(err: HttpErrorResponse) => {
				confirm(err.message);
			});		
  }

  public onUpdateUser(user: User): void { 
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("title", "Update User");    
    this.router.navigateByUrl('/home');
  }
}
