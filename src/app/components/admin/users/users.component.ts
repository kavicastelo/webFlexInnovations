import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";
import {UsersService} from "../../../service/users.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  usersList:any[] = []

  constructor(private userService:UsersService,
              private cookieService:AuthService,
              private route:Router,
              private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers(){
    this.userService.usersList().subscribe(response=>{
      this.usersList = response.data.value;
    },error => {
      console.log(error);
    })
  }

  deleteUser(id: any) {
    if(confirm("Are you sure?")){
      this.userService.deleteUser(id).subscribe(response=>{
        this.openSnackBar('Customer Deleted!','OK');
        this.loadUsers();
      },error=>{
        this.openSnackBar('Somethings Wrong! try again','OK');
        console.log(error);
      })
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }


}
