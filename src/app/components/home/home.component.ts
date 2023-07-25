import {Component, OnInit} from '@angular/core';
import {ProjectCountService} from "../../service/project-count.service";
import {Meta} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pCount: any[] = []

  hovered = false;

  options: number[] = Array.from({length: 8}, (_, i) => i + 1);
  selectedOptions: number[] = [];
  optionsOpen = false;
  images: any[] = [
    {
      src: './assets/img/service/mob.png',
      alt: 'mobile development'
    },
    {
      src: './assets/img/service/backend.png',
      alt: 'backend development'
    },
    {
      src: './assets/img/service/frontend.png',
      alt: 'frontend development'
    },
    {
      src: 'https://flexi-art.com/assets/img/service/data%20entry.png',
      alt: 'data entry'
    },
    {
      src: './assets/img/service/web.png',
      alt: 'web development'
    },

    {
      src: './assets/img/service/marketing.png',
      alt: 'digital marketing'
    },
    {
      src: './assets/img/service/graphic.png',
      alt: 'graphic design'
    },
    {
      src: './assets/img/service/typesetting.png',
      alt: 'typesetting'
    }
  ];

  constructor(private pCountService: ProjectCountService, private meta: Meta, private router: Router) {
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
      content: 'web development, mobile development, software development, web application, mobile apps, software company,\n' +
        '        best software development company, app development company, node development, mean stack, mern stack, flexible apps,\n' +
        '        flexiart, digital flexi, web app developer, mobile app developer, flexi-art'
    });

    this.loadPCount()
  }

  private loadPCount() {
    this.pCountService.projectCount().subscribe(response => {
      this.pCount = response.data.value;
    }, error => {
      console.log(error);
    })
  }

  getRotation(index: number): number {
    const deg = this.options.length === 8 ? 45 : 360;
    return this.selectedOptions.includes(index + 1) ? index * deg : -360;
  }

  toggleOptions(): void {
    this.optionsOpen = !this.optionsOpen;
    const checkbox = event?.target as HTMLInputElement;
    if (this.optionsOpen) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
      // for (let i = 0; i < 8; i++) {
      //   const index = this.selectedOptions.indexOf(i);
      //   if (index !== -1) {
      //     this.selectedOptions.splice(index, 1);
      //   }
      // }
    }
    for (let i = 0; i < 9; i++) {
      this.getRotation(i);
      this.onOptionChange(event, i);
    }
  }

  onOptionChange(event: Event | undefined, option: number): void {
    const checkbox = event?.target as HTMLInputElement;
    if (checkbox) {
      if (checkbox.checked) {
        for (let i = 0; i < 8; i++) {
          this.selectedOptions.push(i + 1);
        }
      } else {
        const index = this.selectedOptions.indexOf(option) - 1;
        if (index !== -1) {
          this.selectedOptions.splice(index, 1);
        }
      }
    }
  }

  navigate() {
    this.router.navigate(['/service']);
  }

  toggleHoverStyles(hovering: boolean): void {
    this.hovered = hovering;
    console.log(hovering);
  }
}
