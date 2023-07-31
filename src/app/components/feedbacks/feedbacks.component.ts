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
  isStillRecoginze = false;

  feedbackList:any[] = []

  loading:boolean = false;

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
    this.loading = true;
    this.feedbackService.sendFeedback(
      this.feedbackForm.get('name')?.value,
      this.feedbackForm.get('message')?.value,
      new Date()
    ).subscribe(response=>{
      this.loading = false;
      this.openSnackBar('Send Success!','OK')
      this.loadFeedbacks()
      this.feedbackForm.reset();
    },error => {
      this.loading = false;
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
    this.feedbackForm.patchValue({message: textValue})
    // @ts-ignore
    document.getElementById('voice-para').innerHTML= "";
  }

}
