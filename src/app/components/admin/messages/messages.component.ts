import { Component } from '@angular/core';
import {MessagesService} from "../../../service/messages.service";
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

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

}
