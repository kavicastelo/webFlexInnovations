import { Component } from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import DOMPurify from 'dompurify';
import {SendEmailsService} from "../../../service/send-emails.service";

@Component({
  selector: 'app-email-template-editor',
  templateUrl: './email-template-editor.component.html',
  styleUrls: ['./email-template-editor.component.scss']
})
export class EmailTemplateEditorComponent {

  htmlContent: string = '';
  renderedHtml: SafeHtml = '';
  subject: string = '';
  view: boolean = false;

  template: any = {
    subject: '',
    template: '',
  };

  constructor(private sanitizer: DomSanitizer, private eService: SendEmailsService) {}

  convertHtmlToPage() {
    const sanitizedHtml = DOMPurify.sanitize(this.htmlContent);
    this.renderedHtml = this.sanitizer.bypassSecurityTrustHtml(sanitizedHtml);
    this.view ? this.view = false : this.view = true;
  }

  onSubmit() {
    this.template.template = this.renderedHtml;
    this.template.subject = this.subject;

    this.eService.sendTemplate(this.template).subscribe(
      (response) => {
        console.log('Template sent successfully:', response);
      },
      (error) => {
        console.error('Error sending template:', error);
      }
    );
  }

}
