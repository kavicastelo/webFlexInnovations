import { Component } from '@angular/core';
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";
import {GalleryService} from "../../../service/gallery.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dashboard-gallery',
  templateUrl: './dashboard-gallery.component.html',
  styleUrls: ['./dashboard-gallery.component.scss']
})
export class DashboardGalleryComponent {

  imageList:any[] = []

  addImageForm = new FormGroup({
    src: new FormControl(null,[
      Validators.required
    ]),
    thumb: new FormControl(null,[
      Validators.required
    ]),
    caption: new FormControl(null,[
      Validators.required
    ])
  })

  constructor(private galleryService:GalleryService,
              private route:Router,
              private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.loadImages();
  }

  private loadImages(){
    this.galleryService.getImages().subscribe(response=>{
      this.imageList = response.data.value;
    },error => {
      console.log(error);
    })
  }

  addImage() {
    this.galleryService.saveImage({
      src:String(this.addImageForm.get('src')?.value),
      thumb:String(this.addImageForm.get('thumb')?.value),
      caption:String(this.addImageForm.get('caption')?.value)}
    ).subscribe(response=>{
      this.openSnackBar('Image Added!','OK');
      this.addImageForm.reset();
      this.loadImages()
    },error => {
      this.openSnackBar('Somethings wrong! User can be already exists!','OK');
      console.log(error);
    })
  }

  deleteImage(id: any) {
    if(confirm("Are you sure?")){
      this.galleryService.deleteImage(id).subscribe(response=>{
        this.openSnackBar('Image Deleted!','OK');
        this.loadImages();
      },error=>{
        this.openSnackBar('Somethings Wrong! try again','OK');
        console.log(error);
      })
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }

}
