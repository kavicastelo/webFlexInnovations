import { Component } from '@angular/core';
import {interval, Subscription} from "rxjs";
import { Meta } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Flexiart Company';

  private subscription: Subscription | undefined;
  public dateNow = new Date();
  public dDay = new Date('august 01 2023 00:00:00');
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  public timeDifference:any;
  public secondsToDday:any;
  public minutesToDday:any;
  public hoursToDday:any;
  public daysToDday:any;

  private getTimeDifference () {
    this.timeDifference = this.dDay.getTime() - new  Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits (timeDifference: any) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }

  constructor(private meta: Meta) { }

  ngOnInit(): void {
    this.meta.updateTag({ name: 'title', content: 'Flexiart Pvt.Ltd - Make your digital dreams come true' });
    this.meta.updateTag({ name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' });
    this.meta.updateTag({ name: 'author', content: 'flexiart' });
    this.meta.updateTag({ name: 'robots', content: 'none' });
    this.meta.updateTag({ httpEquiv: 'X-UA-Compatible', content: 'ie=edge' });
    this.meta.updateTag({ name: 'description', content: 'we are help to grow customer\'s businesses faster than ever. we are helps to customers\n' +
        '  with developing mobile and web applications' });
    this.meta.updateTag({ name: 'keywords', content: 'web development, mobile development, software development, web application, mobile apps, software company,\n' +
        '        best software development company, app development company, node development, mean stack, mern stack, flexible apps,\n' +
        '        flexiart, digital flexi, web app developer, mobile app developer, flexi-art' });

    this.buttonClick()

    this.subscription = interval(1000)
      .subscribe(x => { this.getTimeDifference(); });
  }

  buttonClick(){
    const btn= document.getElementById('main-model-btn');
    // @ts-ignore
    btn.click();
  }
}
