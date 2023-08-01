import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProjectCountService} from "../../../service/project-count.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../service/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {OfferService} from "../../../service/offer.service";

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent {
  selectedCount:any = [];
  enableCount = false;

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
  });

  offersForm = new FormGroup({
    img: new FormControl(null,[
      Validators.required
    ]),
    date: new FormControl(null,[
      Validators.required
    ])
  });

  constructor(private pCountService:ProjectCountService,
              private offersService:OfferService,
              private cookieService:AuthService,
              private route:Router,
              private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.loadCount();
    this.loadOffers();
  }

  private loadCount(){
    this.pCountService.projectCount().subscribe(response=>{
      this.selectedCount = response.data.value;
      let patch = {
        clients:this.selectedCount[0].clients,
        projects:this.selectedCount[0].projects,
        solutions:this.selectedCount[0].solutions,
      }
      this.pCountForm.setValue(patch);
      this.enableCount = true
    },error => {
      console.log(error);
    })
  }

  saveCount() {
    if(this.selectedCount != null){
      //update
      this.pCountService.updateCount({
        clients:Number(this.pCountForm.get('clients')?.value),
        projects:Number(this.pCountForm.get('projects')?.value),
        solutions:Number(this.pCountForm.get('solutions')?.value)},this.selectedCount[0]._id
      ).subscribe(response=>{
        this.openSnackBar('Count Updated!','OK');
        this.loadCount();
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
        this.loadCount();
      },error => {
        console.log(error);
      })
    }
  }

  loadOffers(){
    this.offersService.getOffers().subscribe(response=>{
      let patch = {
        img:response.data.value[0].img,
        date:response.data.value[0].date
      }
      this.offersForm.setValue(patch);
    },error => {
      console.log(error);
    })
  }

  updateOffers(){
    this.offersService.updateOffer({
      img:this.offersForm.get('img')?.value,
      date:this.offersForm.get('date')?.value
    },'1001').subscribe(response=>{
      this.openSnackBar('Offers Updated!','OK');
      this.loadOffers();
    },error => {
      console.log(error);
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }

}
