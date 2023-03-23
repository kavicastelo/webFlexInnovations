import { Component } from '@angular/core';
import {MessagesService} from "../../../service/messages.service";
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dashboard-messages',
  templateUrl: './dashboard-messages.component.html',
  styleUrls: ['./dashboard-messages.component.scss']
})
export class DashboardMessagesComponent {

  messagesList:any[] = []

  constructor(private messagesService:MessagesService,
              private cookieService:AuthService,
              private route:Router,
              private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.loadMessages();
  }

  private loadMessages(){
    this.messagesService.messagesList().subscribe(response=>{
      this.messagesList = response.data.value;
    },error => {
      console.log(error);
    })
  }

  deleteMessage(id: any) {
    if(confirm("Are you sure?")){
      this.messagesService.deleteMessage(id).subscribe(response=>{
        this.openSnackBar('Message Deleted!','OK');
        this.loadMessages();
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
