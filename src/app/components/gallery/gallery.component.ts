import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Lightbox, IAlbum } from 'ngx-lightbox';
import {GalleryService} from "../../service/gallery.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GalleryComponent implements OnInit{

  images:IAlbum[] = [];
  lightboxImage: IAlbum | undefined;
  loadingImages = true;

  constructor(private lightbox: Lightbox, private gService: GalleryService) {}

  ngOnInit() {
    this.loadImages()
  }

  openLightboxModal(image: IAlbum): void {
    this.lightboxImage = image;
    const lightboxContainer = document.querySelector('.lightbox-container');
    if (lightboxContainer) {
      lightboxContainer.classList.add('open');
    }
  }

  closeLightboxModal(): void {
    this.lightboxImage = undefined;
    const lightboxContainer = document.querySelector('.lightbox-container');
    if (lightboxContainer) {
      lightboxContainer.classList.remove('open');
    }
  }

  handleImageError(image: IAlbum): void {
    image.src = '/assets/notfound/notfound.gif'; // Replace with your placeholder image path
  }

  private loadImages(){
    this.gService.getImages().subscribe(response=>{
      this.gService = response.data.value;
      this.images = response.data.value;
      this.loadingImages = false;
    },error => {
      console.log(error);
      this.loadingImages = true;
    })
  }

}
