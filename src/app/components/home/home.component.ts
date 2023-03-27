import { Component, OnInit } from '@angular/core';
import {ProjectCountService} from "../../service/project-count.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pCount:any[] = []

  constructor(private pCountService:ProjectCountService) { }

  ngOnInit(): void {
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
