import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent {

  changePassForm = new FormGroup({
    newPass: new FormControl(null,[
      Validators.required
    ]),
    reNewPass: new FormControl(null,[
      Validators.required
    ])
  })

  clear=()=>{
    this.changePassForm.reset()
  }

}
