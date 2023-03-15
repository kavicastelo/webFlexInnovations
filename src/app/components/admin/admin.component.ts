import { Component } from '@angular/core';
import {LoginService} from "../../service/login.service";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  showFiller = false;
  constructor(private loginService:LoginService,
              private cookieService:AuthService,
              private route:Router,
              private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    if(this.cookieService.isExists()){
      this.route.navigate(['/admin-2000-private-access']);
    }
    else{
      this.route.navigate(['/admin-login']);
    }
  }

  logout=()=>{
    this.cookieService.logout()
    this.route.navigateByUrl('/login');
    this.openSnackBar('Logged out','');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }

}
