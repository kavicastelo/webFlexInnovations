import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AddUserService} from "../../service/add-user.service";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.scss']
})
export class AdminSigninComponent {
  addUserForm = new FormGroup({
    email: new FormControl(null,[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null,[
      Validators.required
    ]),
    fullName: new FormControl(null,[
      Validators.required
    ]),
    phone: new FormControl(null,[
      Validators.required
    ]),
    address: new FormControl(null,[
      Validators.required
    ])
  })

  constructor(private addUserService:AddUserService,
              private cookieService:AuthService,
              private route:Router,
              private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    if(this.cookieService.isExists()){
      this.route.navigate(['/admin']);
    }
  }

  addUser() {
    this.addUserService.addUser(
      this.addUserForm.get('email')?.value,
      this.addUserForm.get('password')?.value,
      this.addUserForm.get('fullName')?.value,
      this.addUserForm.get('phone')?.value,
      this.addUserForm.get('address')?.value,
    ).subscribe(response=>{
      this.openSnackBar('User Added!','OK');
      this.cookieService.createUser(response.data.token);
      this.addUserForm.reset();
    },error => {
      this.openSnackBar('Somethings wrong! User can be already exists!','OK');
      console.log(error);
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }

  clear=()=>{
    this.addUserForm.reset()
  }

}
