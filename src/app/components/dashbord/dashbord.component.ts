import { Component } from '@angular/core';
import {LoginService} from "../../service/login.service";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent {

  constructor(private loginService:LoginService,
              private cookieService:AuthService,
              private route:Router) { }

  ngOnInit(): void {
    if(this.cookieService.isExists()){
      this.route.navigate(['/dashboard']);
    }
    else{
      this.route.navigate(['/login']);
    }
  }

}
