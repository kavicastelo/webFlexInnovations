import { Injectable } from '@angular/core';


declare let webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root'
})
export class VoiceRecognitionService {

  recognition =  new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  public text = '';
  tempWords:any;

  constructor() { }

  init() {

    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    this.recognition.addEventListener('result', (e:any) => {
      // @ts-ignore
      const transcript = Array.from(e.results)
        // @ts-ignore
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.tempWords = transcript;
      console.log(transcript);
    });
  }

  start() {
    this.recognition.start();
    this.isStoppedSpeechRecog = false;
    console.log("Speech recognition started")
    this.recognition.addEventListener('end', (condition:any) => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
        console.log("End speech recognition")
      } else {
        this.wordConcat()
        this.recognition.start();
      }
    });
  }
  stop() {
    this.wordConcat()
    this.recognition.stop();
    this.isStoppedSpeechRecog = true;
    console.log("End speech recognition")
  }

  wordConcat() {
    this.text = this.text + ' ' + this.tempWords + '.';
    this.tempWords = '';
  }
}
