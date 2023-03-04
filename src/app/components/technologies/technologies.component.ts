import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  imageObject = [{
    image: 'https://icon-library.com/images/nodejs-icon/nodejs-icon-24.jpg',
    thumbImage: 'https://icon-library.com/images/nodejs-icon/nodejs-icon-24.jpg',
  }, {
    image: 'https://icon-library.com/images/java-icon-images/java-icon-images-11.jpg',
    thumbImage: 'https://icon-library.com/images/java-icon-images/java-icon-images-11.jpg'
  }, {
    image: 'https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg',
    thumbImage: 'https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg',
  },{
    image: 'https://icon-library.com/images/angularjs-icon/angularjs-icon-14.jpg',
    thumbImage: 'https://icon-library.com/images/angularjs-icon/angularjs-icon-14.jpg',
  }, {
    image: 'https://icon-library.com/images/react_1353128.png',
    thumbImage: 'https://icon-library.com/images/react_1353128.png'
  }, {
    image: 'https://icon-library.com/images/html5-icon-png/html5-icon-png-21.jpg',
    thumbImage: 'https://icon-library.com/images/html5-icon-png/html5-icon-png-21.jpg',
  }, {
    image: 'https://icon-library.com/images/icon-html5/icon-html5-6.jpg',
    thumbImage: 'https://icon-library.com/images/icon-html5/icon-html5-6.jpg',
  }, {
    image: 'https://icon-library.com/images/mysql-icon/mysql-icon-12.jpg',
    thumbImage: 'https://icon-library.com/images/mysql-icon/mysql-icon-12.jpg',
  }, {
    image: 'https://icon-library.com/images/no-sql-icon/no-sql-icon-12.jpg',
    thumbImage: 'https://icon-library.com/images/no-sql-icon/no-sql-icon-12.jpg',
  }, {
    image: 'https://icon-library.com/images/nodejs-icon/nodejs-icon-15.jpg',
    thumbImage: 'https://icon-library.com/images/nodejs-icon/nodejs-icon-15.jpg',
  }, {
    image: 'https://icon-library.com/images/icon-for-wordpress/icon-for-wordpress-16.jpg',
    thumbImage: 'https://icon-library.com/images/icon-for-wordpress/icon-for-wordpress-16.jpg',
  }, {
    image: 'https://icon-library.com/images/non-service_specific_copy__aws_cloud-512_4668.png',
    thumbImage: 'https://icon-library.com/images/non-service_specific_copy__aws_cloud-512_4668.png',
  }, {
    image: 'https://icon-library.com/images/65813-google-computer-icons-github-firebase-angularjs-messaging.png',
    thumbImage: 'https://icon-library.com/images/65813-google-computer-icons-github-firebase-angularjs-messaging.png',
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
