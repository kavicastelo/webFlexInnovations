import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angularChatBot';
  colorBackRight: string = '#007bff';
  colorFontRight: string = '#ffffff';
  colorBackLeft: string = '#eeeeee';
  colorFontLeft: string = '#343a40';
  messages = [];
}
