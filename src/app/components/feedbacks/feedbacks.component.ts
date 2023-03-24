import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FeedbacksService} from "../../service/feedbacks.service";
import {VoiceRecognitionService} from "../../service/voice-recognition.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent {

  voiceBtn=false;

  feedbackList:any[] = []

  feedbackForm = new FormGroup({
    name: new FormControl(null,[
      Validators.required
    ]),
    message: new FormControl(null,[
      Validators.required
    ])
  })

  constructor(private feedbackService:FeedbacksService,
              public voiceService:VoiceRecognitionService,
              private route:Router,
              private snackBar:MatSnackBar) {
    this.voiceService.init()
  }

  ngOnInit(): void {
    this.loadFeedbacks()
  }

  sendFeedback() {
    this.feedbackService.sendFeedback(
      this.feedbackForm.get('name')?.value,
      this.feedbackForm.get('message')?.value,
      new Date()
    ).subscribe(response=>{
      this.openSnackBar('Send Success!','OK')
      this.loadFeedbacks()
      this.feedbackForm.reset();
    },error => {
      this.openSnackBar('Send Failed! try again!','OK')
      console.log(error);
    })
  }

  private loadFeedbacks(){
    this.feedbackService.feedbacksList().subscribe(response=>{
      this.feedbackList = response.data.value;
    },error => {
      console.log(error);
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }

  startService(){
    this.voiceService.start()
  }

  stopService(){
    this.voiceService.stop()
    this.patchValue();
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
