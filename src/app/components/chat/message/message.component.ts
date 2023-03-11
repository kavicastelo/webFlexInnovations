import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  @Input('text') text: any;
  @Input('date') date: any;
  @Input('owner') owner: any;
  @Input('colorBackRight') colorBackRight: any;
  @Input('colorFontRight') colorFontRight: any;
  @Input('colorBackLeft') colorBackLeft: any;
  @Input('colorFontLeft') colorFontLeft: any;

  constructor(){

  }

  ngOnInit(): void{

  }

}
