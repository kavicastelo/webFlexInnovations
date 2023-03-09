import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dashboard-setting',
  templateUrl: './dashboard-setting.component.html',
  styleUrls: ['./dashboard-setting.component.scss']
})
export class DashboardSettingComponent {

  changePassForm = new FormGroup({
    password: new FormControl(null,[
      Validators.required
    ]),
    reNewPass: new FormControl(null,[
      Validators.required
    ])
  });

  updateForm = new FormGroup({
    fullName: new FormControl(null,[
      Validators.required
    ]),
    email: new FormControl(null,[
      Validators.required,
      Validators.email
    ]),
    phone: new FormControl(null,[
      Validators.required
    ]),
    address: new FormControl(null,[
      Validators.required
    ])
  })

  clear=()=>{
    this.changePassForm.reset()
  }

}
