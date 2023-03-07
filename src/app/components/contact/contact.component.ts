import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../../service/contact.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl(null,[
      Validators.required
    ]),
    email: new FormControl(null,[
      Validators.required,
      Validators.email
    ]),
    message: new FormControl(null,[
      Validators.required
    ])
  })

  constructor(private contactService:ContactService,
              private route:Router,
              private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  sendMsg() {
    this.contactService.sendMail(
      this.contactForm.get('name')?.value,
      this.contactForm.get('email')?.value,
      this.contactForm.get('message')?.value
    ).subscribe(response=>{
      this.openSnackBar('Send Success!','OK')
      this.contactForm.reset();
    },error => {
      this.openSnackBar('Send Failed! try again!','OK')
      console.log(error);
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }

}
