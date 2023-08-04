import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {SubscribeService} from "../../service/subscribe.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.scss']
})
export class UnsubscribeComponent {

  showError:boolean = false;
  checkMail:any;

  constructor(private route:Router, private sService:SubscribeService, private snackBar: MatSnackBar) {
  }

  closeWindow() {
    this.route.navigate(['/']);
  }

  unsubscribe() {
    let mail = (<HTMLInputElement>document.getElementById('subInput')).value
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (mail.match(validRegex)) {
      this.showError = false;
      this.sService.getNews().subscribe(response => {
        let isSubscribed = false;

        for (let i = 0; i < response.data.value.length; i++) {
          this.checkMail = response.data.value[i];

          if (this.checkMail.email === mail && !this.checkMail.subscribed) {
            isSubscribed = true;
            break;
          }
        }

        if (isSubscribed) {
          (<HTMLInputElement>document.getElementById('subInput')).value = '';
          this.openSnackBar('You are already unsubscribed', 'OK');
        } else {
          this.sService.unsubscribeNews(mail).subscribe(
            response => {
              (<HTMLInputElement>document.getElementById('subInput')).value = '';
              this.openSnackBar('Unsubscribe Success!', 'OK');
              this.route.navigate(['/']);
            },
            error => {
              (<HTMLInputElement>document.getElementById('subInput')).value = '';
              this.openSnackBar('Unsubscribe Failed! try again!', 'OK');
              this.route.navigate(['/']);
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
