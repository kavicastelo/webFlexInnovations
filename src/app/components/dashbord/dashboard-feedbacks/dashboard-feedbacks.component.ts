import { Component } from '@angular/core';
import {FeedbacksService} from "../../../service/feedbacks.service";
import {VoiceRecognitionService} from "../../../service/voice-recognition.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dashboard-feedbacks',
  templateUrl: './dashboard-feedbacks.component.html',
  styleUrls: ['./dashboard-feedbacks.component.scss']
})
export class DashboardFeedbacksComponent {

  feedbackList:any[] = []

  constructor(private feedbackService:FeedbacksService,
              public voiceService:VoiceRecognitionService,
              private route:Router,
              private snackBar:MatSnackBar) {
    this.voiceService.init()
  }

  ngOnInit(): void {
    this.loadFeedbacks()
  }

  private loadFeedbacks(){
    this.feedbackService.feedbacksList().subscribe(response=>{
      this.feedbackList = response.data.value;
    },error => {
      console.log(error);
    })
  }

  deleteFeedback(id: any) {
    if(confirm("Are you sure?")){
      this.feedbackService.deleteFeedback(id).subscribe(response=>{
        this.openSnackBar('Feedback Deleted!','OK');
        this.loadFeedbacks();
      },error=>{
        this.openSnackBar('Somethings Wrong! try again','OK');
        console.log(error);
      })
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }

}
