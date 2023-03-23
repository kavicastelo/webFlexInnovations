import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Flexiart Company';

  constructor() {
  }

  ngOnInit(): void {
    this.buttonClick()
  }

  buttonClick(){
    const btn= document.getElementById('main-model-btn');
    // @ts-ignore
    btn.click();
  }
}
