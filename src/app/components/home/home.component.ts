import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;


let points:any [],
  velocity2 = 5, // velocity squared
  canvas = document.getElementById('container'),
  context1: HTMLElement|null = canvas,
  // @ts-ignore
  context = context1.getContext('2d'),
  radius = 5,
  boundaryX = 200,
  boundaryY = 200,
  numberOfPoints = 30;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (function ($) {
      $(document).ready(function(){
        console.log("Hello from jQuery!");
      });
    })(jQuery);
  }

  init() {
    // create points
    for (let i = 0; i<numberOfPoints; i++) {
      this.createPoint();
    }
    // create connections
    for (let i = 0, l=points.length; i<l; i++) {
      let point = points[i];
      if(i == 0) {
        points[i].buddy = points[points.length-1];
      } else {
        points[i].buddy = points[i-1];
      }
    }

    // animate
    this.animate();
  }

  createPoint() {
    let point:any = {}, vx2, vy2;
    point.x = Math.random()*boundaryX;
    point.y = Math.random()*boundaryY;
    // random vx
    point.vx = (Math.floor(Math.random())*2-1)*Math.random();
    vx2 = Math.pow(point.vx, 2);
    // vy^2 = velocity^2 - vx^2
    vy2 = velocity2 - vx2;
    point.vy = Math.sqrt(vy2) * (Math.random()*2-1);
    points.push(point);
  }

  resetVelocity(point:any, axis:any, dir:any) {
    let vx, vy;
    if(axis == 'x') {
      point.vx = dir*Math.random();
      const vx2 = Math.pow(point.vx, 2);
      // vy^2 = velocity^2 - vx^2
      const vy2 = velocity2 - vx2;
      point.vy = Math.sqrt(vy2) * (Math.random()*2-1);
    } else {
      point.vy = dir*Math.random();
      const vy2 = Math.pow(point.vy, 2);
      // vy^2 = velocity^2 - vx^2
      const vx2 = velocity2 - vy2;
      point.vx = Math.sqrt(vx2) * (Math.random()*2-1);
    }
  }

  drawCircle(x:any, y:any) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, false);
    context.fillStyle = '#97badc';
    context.fill();
  }

  drawLine(x1:any, y1:any, x2:any, y2:any) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.strokeStyle = '#8ab2d8'
    context.stroke();
  }

  draw() {
    for(let i =0, l=points.length; i<l; i++) {
      // circles
      let point = points[i];
      point.x += point.vx;
      point.y += point.vy;
      this.drawCircle(point.x, point.y);
      // lines
      this.drawLine(point.x, point.y, point.buddy.x, point.buddy.y);
      // check for edge
      if(point.x < 0+radius) {
        this.resetVelocity(point, 'x', 1);
      } else if(point.x > boundaryX-radius) {
        this.resetVelocity(point, 'x', -1);
      } else if(point.y < 0+radius) {
        this.resetVelocity(point, 'y', 1);
      } else if(point.y > boundaryY-radius) {
        this.resetVelocity(point, 'y', -1);
      }
    }
  }

  animate() {
    context.clearRect ( 0 , 0 , 200 , 200 );
    this.draw();
    requestAnimationFrame(this.animate);
  }

}
