import { Component } from '@angular/core';
import {SubscribeService} from "../../../service/subscribe.service";
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss']
})
export class MailListComponent {

  mailsList:any[] = [];
  allList:boolean = false;

  constructor(private sService:SubscribeService) { }

  ngOnInit(): void {
    this.loadSubscribers()
  }

  public loadSubscribers(){
    this.allList = false;
    this.sService.getNews().subscribe(response=>{
      this.mailsList = response.data.value.filter((m:any) => m.subscribed);
    },error => {
      console.log(error);
    })
  }

  public loadAllMails(){
    this.allList = true;
    this.sService.getNews().subscribe(response=>{
      this.mailsList = response.data.value;
    },error => {
      console.log(error);
    })
  }

  exportToExcel() {
    const ws = XLSX.utils.json_to_sheet(this.mailsList);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'subscribers' + '.xlsx');
  }

  load() {
    if (!this.allList) {
      this.loadAllMails();
    }
    else{
      this.loadSubscribers();
    }
  }
}
