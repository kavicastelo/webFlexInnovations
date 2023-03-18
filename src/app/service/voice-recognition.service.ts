import {Injectable} from '@angular/core';


declare let webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root'
})
export class VoiceRecognitionService {

  recognition = new webkitSpeechRecognition();
  isSpeaking = false;
  isStopped = true;
  public text = '';
  tempWords: any;

  constructor() {
  }

  init() {

    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    this.recognition.addEventListener('result', (e: any) => {
      const transcript = Array.from(e.results)
        .map((result: any) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.tempWords = transcript;
      console.log(transcript);
    });
  }

  start() {
    this.recognition.start();
    this.isSpeaking = true;
    this.isStopped = false;
    console.log("Speech recognition started")
    this.recognition.addEventListener('end', (condition: any) => {
      if (this.isSpeaking && !this.isStopped) {
        this.wordConcat();
        this.recognition.start();
      } else {
        this.recognition.stop();
        console.log("End speech recognition")
      }
    });
  }

  stop() {
    this.wordConcat()
    this.recognition.stop();
    this.isSpeaking = false;
    this.isStopped = true;
    console.log("End speech recognition")
  }

  wordConcat() {
    this.text = this.text + ' ' + this.tempWords + '.';
    this.tempWords = '';
  }
}
