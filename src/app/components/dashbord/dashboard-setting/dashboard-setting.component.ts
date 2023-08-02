import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../../service/users.service";
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dashboard-setting',
  templateUrl: './dashboard-setting.component.html',
  styleUrls: ['./dashboard-setting.component.scss']
})
export class DashboardSettingComponent {

  selectedUser:any;
  selectedUserId:any;

  changePassForm = new FormGroup({
    password: new FormControl(null,[
      Validators.required
    ]),
    reNewPass: new FormControl(null,[
      Validators.required
    ])
  });

  updateForm = new FormGroup({
    email: new FormControl(null,[
      Validators.required,
      Validators.email
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

  constructor(private usersService:UsersService,
              private cookieService:AuthService,
              private route:Router,
              private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    const mail = localStorage.getItem('email');
    this.setUpdateData(mail)
  }

  clear=()=>{
    this.changePassForm.reset()
  }

  updatePassword=()=>{
    // @ts-ignore
    const newPass:string|null = document.getElementById("newPass").value;
    // @ts-ignore
    const reNewPass:string|null = document.getElementById("reNewPass").value;

    if (newPass === reNewPass){
      const mail = localStorage.getItem('email');

      this.usersService.updatePwd({
        password:this.changePassForm.get('password')?.value},mail
      ).subscribe(response=>{
        this.openSnackBar('Password Updated!','OK');
      },error => {
        console.log(error);
      })
    }
    else{
      alert("Your Password Is Miss Matched")
    }
  }

  updateSelectedUser=()=>{
    const id = this.selectedUserId
      this.usersService.updateUser({
        email:this.changePassForm.get('email')?.value,
        fullName:this.changePassForm.get('fullName')?.value,
        phone:this.changePassForm.get('phone')?.value,
        address:this.changePassForm.get('address')?.value},id
      ).subscribe(response=>{
        this.openSnackBar('User Updated!','OK');

        const mail = localStorage.getItem('email');
        this.setUpdateData(mail)
      },error => {
        console.log(error);
      })
  }

  setUpdateData(email: any) {
    this.usersService.getUser(email).subscribe(response=>{
      if(response.data.value!==null){
        this.selectedUser = response.data.value;
        this.updateForm.patchValue({
          fullName: this.selectedUser.fullName,
          email: this.selectedUser.email,
          phone: this.selectedUser.phone,
          address: this.selectedUser.address
        });

        this.selectedUserId = this.selectedUser._id
      }
      else{
        this.openSnackBar('User not Found!','OK');
      }
    },error=>{
      this.openSnackBar('Somethings Wrong! try again','OK');
      console.log(error);
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }

}
