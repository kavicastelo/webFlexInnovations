import { Component, OnInit } from '@angular/core';
import {ProjectCountService} from "../../service/project-count.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  pCount:any[] = []

  constructor(private pCountService:ProjectCountService) { }

  ngOnInit(): void {
    this.loadPCount()
  }

  private loadPCount(){
    this.pCountService.projectCount().subscribe(response=>{
      this.pCount = response.data.value;
    },error => {
      console.log(error);
    })
  }

}
