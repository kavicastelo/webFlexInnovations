import { Component } from '@angular/core';
import {ProjectCountService} from "../../../service/project-count.service";
import {SubscribeService} from "../../../service/subscribe.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  showError:boolean = false;
  checkMail:any;

  constructor(
    private pCountService: ProjectCountService,
    private snackBar: MatSnackBar,
    private sService: SubscribeService) {
  }

  newsLetter() {
    let input = document.querySelector('#subInput');
    let val = (<HTMLInputElement>document.getElementById('subInput')).value
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (val.match(validRegex)) {
      this.showError = false;
      this.sService.getNews().subscribe(response => {
        let isSubscribed = false;

        for (let i = 0; i < response.data.value.length; i++) {
          this.checkMail = response.data.value[i];

          if (this.checkMail.email === val && this.checkMail.subscribed) {
            isSubscribed = true;
            break;
          }
        }

        if (isSubscribed) {
          (<HTMLInputElement>document.getElementById('subInput')).value = '';
          this.openSnackBar('You are already subscribed', 'OK');
        } else {
          this.sService.subscribeNews(val).subscribe(
            response => {
              (<HTMLInputElement>document.getElementById('subInput')).value = '';
              this.openSnackBar('Subscribe Success!', 'OK');
            },
            error => {
              (<HTMLInputElement>document.getElementById('subInput')).value = '';
              this.openSnackBar('Subscribe Failed! try again!', 'OK');
            }
          );
        }
      });
    } else {
      this.showError = true;
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }
}
