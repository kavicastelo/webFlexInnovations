import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../../service/contact.service";
import {VoiceRecognitionService} from "../../service/voice-recognition.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  voiceBtn=false;
  isStillRecoginze = false;

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
              public voiceService:VoiceRecognitionService,
              private route:Router,
              private snackBar:MatSnackBar) {
    this.voiceService.init()
  }

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

  startService() {
    this.isStillRecoginze = this.voiceService.start() === true ? true : false;
  }

  stopService() {
    this.isStillRecoginze = this.voiceService.stop() === false ? false : true;
  }

  recordBtn=()=>{
    this.voiceBtn =! this.voiceBtn
    this.voiceBtn?this.startService():this.stopService();
  }

  patchValue=()=>{
    // @ts-ignore
    const textValue:string|null = document.getElementById('voice-para').textContent
    // @ts-ignore
    this.contactForm.patchValue({message: textValue})
    // @ts-ignore
    document.getElementById('voice-para').innerHTML= "";
  }

}
