import { Component } from '@angular/core';
import {UsersService} from "../../../service/users.service";
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Verify} from "../../../dto/Users";

@Component({
  selector: 'app-dashboard-verify',
  templateUrl: './dashboard-verify.component.html',
  styleUrls: ['./dashboard-verify.component.scss']
})
export class DashboardVerifyComponent {

  Image:any;
  Code:any;
  verified:boolean = false;

  constructor(private usersService:UsersService,
              private cookieService:AuthService,
              private route:Router,
              private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    const mail = localStorage.getItem('email');
    this.showImage(mail);
  }

  showImage(email:any){
    this.usersService.getUser(email).subscribe(response=>{
      if (response.data !== null) {
        console.log(response)
        if (email === response.data.value.email) {
          if (response.data.value.verified) {
            this.verified = true
          }
          else {
            this.usersService.addVerify().subscribe(response=>{
              this.Image = response.data.data_url;
              this.Code = response.data.secret;
            })
          }
        }
      }
    })
  }

}
