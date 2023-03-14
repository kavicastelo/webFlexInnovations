import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProjectCountService} from "../../../service/project-count.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../service/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent {
  selectedCount:any;

  pCountForm = new FormGroup({
    clients: new FormControl(null,[
      Validators.required
    ]),
    projects: new FormControl(null,[
      Validators.required
    ]),
    solutions: new FormControl(null,[
      Validators.required
    ])
  })

  constructor(private pCountService:ProjectCountService,
              private cookieService:AuthService,
              private route:Router,
              private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  private loadCustomers(){
    this.pCountService.projectCount().subscribe(response=>{
      this.selectedCount = response.data.value;

      console.log(this.selectedCount)
    },error => {
      console.log(error);
    })
  }

  saveCount() {
    if(this.selectedCount){
      //update
      this.pCountService.updateCount({
        clients:Number(this.pCountForm.get('clients')?.value),
        projects:Number(this.pCountForm.get('projects')?.value),
        solutions:Number(this.pCountForm.get('solutions')?.value)},this.selectedCount._id
      ).subscribe(response=>{
        this.openSnackBar('Count Updated!','OK');
        this.loadCustomers();
      },error => {
        console.log(error);
      })
    }
    else{
      this.pCountService.saveCount({
        clients:Number(this.pCountForm.get('clients')?.value),
        projects:Number(this.pCountForm.get('projects')?.value),
        solutions:Number(this.pCountForm.get('solutions')?.value)}
      ).subscribe(response=>{
        this.openSnackBar('Count Saved!','OK');
        this.loadCustomers();
      },error => {
        console.log(error);
      })
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }

}
