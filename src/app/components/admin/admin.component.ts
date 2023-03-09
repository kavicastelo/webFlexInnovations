import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../service/login.service";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  showFiller = false;
  constructor(private loginService:LoginService,
              private cookieService:AuthService,
              private route:Router) { }

  ngOnInit(): void {
    if(this.cookieService.isExists()){
      this.route.navigate(['/admin']);
    }
    else{
      this.route.navigate(['/admin-login']);
    }
  }

}
