import { Component, OnInit } from '@angular/core';
import {ProjectCountService} from "../../service/project-count.service";
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pCount:any[] = []

  constructor(private pCountService:ProjectCountService, private meta: Meta) { }

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

    this.loadPCount()
  }

  private loadPCount(){
    this.pCountService.projectCount().subscribe(response=>{
      this.pCount = response.data.value;
      console.log(this.pCount)
    },error => {
      console.log(error);
    })
  }

}
