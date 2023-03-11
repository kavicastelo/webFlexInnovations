import {Component, Input} from '@angular/core';
import {ChatService} from "../../../service/chat.service";
import {Message} from "../../../dto/message";
import {TextMessage} from "../../../dto/text-message";
import {environment} from "../../../../environments/environment";
import {ResponseMessage} from "../../../dto/response-message";
import {VoiceRecognitionService} from "../../../service/voice-recognition.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  voiceBotBtn=false;

  BACK_ENABLED: boolean = true;
  @Input('messages') messages: Message[] | any;
  @Input('colorBackRight') colorBackRight: any;
  @Input('colorFontRight') colorFontRight: any;
  @Input('colorBackLeft') colorBackLeft: any;
  @Input('colorFontLeft') colorFontLeft: any;

  textInput = '';

  constructor(private chatService: ChatService,
              public voiceService:VoiceRecognitionService) {
    this.voiceService.init()
  }

  ngOnInit() {
  }

  sendMessage(){
    let newMessage: Message = { text: this.textInput, date: "", userOwner: true};

    this.messages.push(newMessage);

    let messageBack: TextMessage = { "firstName": environment.firstName, "text": this.textInput}
    if(this.BACK_ENABLED){
      this.chatService.sendMessage(messageBack)
        .subscribe((res: ResponseMessage) => {
          let messageReturn: Message = { text: res.responseMessage, date: new Date().toDateString(), userOwner: false}
          this.messages.push(messageReturn);

        });
    }
    this.textInput = '';
  }

  startService(){
    this.voiceService.start()
  }

  stopService(){
    this.voiceService.stop()
    this.patchValue();
  }

  patchValue=()=>{
    // @ts-ignore
    const textValue:string = document.getElementById('voice-para').textContent;
    // @ts-ignore
    this.textInput = textValue;
    // @ts-ignore
    document.getElementById('voice-para').innerHTML= "";
  }

  recordBtn=()=>{
    this.voiceBotBtn =! this.voiceBotBtn

    if (this.voiceBotBtn){
      this.startService()
    }
    else{
      this.stopService()
    }
  }

  onKey(event: any){
    if(event.keyCode == 13){
      this.sendMessage();
    }
  }

}
