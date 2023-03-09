import { Component } from '@angular/core';
import {UsersService} from "../../../service/users.service";

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.scss']
})
export class DashboardUsersComponent {

  usersList:any[] = []

  constructor(private userService:UsersService) { }

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

}
