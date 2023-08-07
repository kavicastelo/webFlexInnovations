import {Component, ErrorHandler, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {Meta} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {OfferService} from "./service/offer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Flexiart Company';

  offerEndDay:any;
  offerImage:any;

  private subscription: Subscription | undefined;
  public dateNow = new Date();
  public dDay:any;
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;

  public timeDifference: any;
  public secondsToDday: any;
  public minutesToDday: any;
  public hoursToDday: any;
  public daysToDday: any;

  isDropdownActive: boolean = false;

  consoleLogEmpty: boolean = false;

  constructor(private meta: Meta, private router: Router, private offerService: OfferService) {
  }

  ngOnInit(): void {
    this.meta.updateTag({name: 'title', content: 'Flexiart Pvt.Ltd - Make your digital dreams come true'});
    this.meta.updateTag({
      name: 'viewport',
      content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'
    });
    this.meta.updateTag({name: 'author', content: 'flexiart'});
    this.meta.updateTag({name: 'robots', content: 'none'});
    this.meta.updateTag({httpEquiv: 'X-UA-Compatible', content: 'ie=edge'});
    this.meta.updateTag({
      name: 'description',
      content: 'we are help to grow customer\'s businesses faster than ever. we are helps to customers\n' +
        '  with developing mobile and web applications'
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'web development, mobile development, software development, web application, mobile apps, software company, best software development company, app development company, node development, mean stack, mern stack, flexible apps, flexiart, digital flexi, web app developer, mobile app developer, flexi-art, flexiart company, flexiart software company, Software development company, Web development services, Mobile app development solutions, Social media marketing strategies,Data entry services, Typesetting solutions, Graphic design services, IT problem-solving expertise, Custom software development, E-commerce website development, Responsive web design, Mobile application optimization, Social media advertising campaigns, Data management and cleansing, Print and digital typesetting, Logo design and branding, IT consulting and solutions, User interface (UI) and user experience (UX) design, Cloud computing solutions, Cybersecurity and data protection measures, sri lanka'
    });

    this.loadOffers();

    setTimeout(()=>{
      this.buttonClick()
    },32000)

    this.subscription = interval(1000)
      .subscribe(x => {
        this.getTimeDifference();
      }, error => {
        // console.log('serverside error');
      });

    this.isDropdownActive = false;


    // Clear the console log
    console.clear();

// Create an array to store the console output
    const consoleOutput: any[] = [];

// Save the original console.log function
    const originalConsoleLog = console.log;

// Override the console.log function to capture the output
    console.log = function (...args: any[]) {
      originalConsoleLog.apply(console, args); // Call the original console.log function
      consoleOutput.push(args); // Store the log output in the consoleOutput array
    };

// Delay in milliseconds before checking the console log
    const delayInMilliseconds = 5000; // 5 minutes

// Wait for the specified delay before checking the console log
    setTimeout(() => {
      // Check if the console output is empty
      if (consoleOutput[0][0] === "offline") {
        this.consoleLogEmpty = true;
      } else {
        this.consoleLogEmpty = false;
      }
    }, delayInMilliseconds);

  }

  loadOffers() {
    this.offerService.getOffers().subscribe(data => {
      if (data.data.value !== null) {
        this.offerImage = data.data.value[0].img;
        this.offerEndDay = data.data.value[0].date;
        this.dDay = new Date(this.offerEndDay);
      }
      else{
        console.log('error')
      }
    }, error => {
      // console.log('server side error');
      this.offerImage = './assets/img/modal-1.webp';
      this.dDay = new Date('August 10, 2023');
    });
  }

  private getTimeDifference() {
    try {
      this.timeDifference = this.dDay.getTime() - new Date().getTime();
    }
    catch (e) {
      this.timeDifference = 0;
    }

    if (this.dDay > new Date()) {
      this.allocateTimeUnits(this.timeDifference);
    }
    else {
      document.getElementsByClassName('timer')[0].innerHTML = "Offer Ended!";
      document.getElementsByClassName('modal-btn')[0].innerHTML = "Request an Offer";
    }
    // this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits(timeDifference: any) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  onDropdownItemClicked() {
    this.isDropdownActive = true;
    this.onNavItemClicked();
  }

  buttonClick() {
    const btn = document.getElementById('main-model-btn');
    // @ts-ignore
    btn.click();
  }

  closeNavbar() {
    if (document.querySelector('.navbar-collapse.show')) {
      const navbarToggler = document.querySelector('.navbar-toggler');
      (navbarToggler as HTMLElement).click();
    }
  }

  onNavItemClicked() {
    this.closeNavbar();
  }

}
