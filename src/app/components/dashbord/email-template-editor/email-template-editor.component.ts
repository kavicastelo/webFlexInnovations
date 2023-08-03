import { Component } from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import DOMPurify from 'dompurify';
import {SendEmailsService} from "../../../service/send-emails.service";
import {MatSnackBar} from "@angular/material/snack-bar";

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
    htmlContent: '',
  };

  constructor(private sanitizer: DomSanitizer, private eService: SendEmailsService, private snackBar:MatSnackBar) {}

  convertHtmlToPage() {
    const sanitizedHtml = DOMPurify.sanitize(this.htmlContent);
    this.renderedHtml = this.sanitizer.bypassSecurityTrustHtml(sanitizedHtml);
    this.view ? this.view = false : this.view = true;
  }

  onSubmit() {
    // Sanitize the HTML content before sending
    const sanitizedHtmlContent = DOMPurify.sanitize(this.htmlContent);
    this.template.htmlContent = sanitizedHtmlContent;
    this.template.subject = this.subject;

    this.eService.sendTemplate(this.template).subscribe(
      (response) => {
        this.openSnackBar('Template sent successfully','OK');
      },
      (error) => {
        this.openSnackBar('Error sending template','OK');
      }
    );
  }

  demoSubmit() {
    const sanitizedHtmlContent = DOMPurify.sanitize(this.htmlContent);
    this.template.htmlContent = sanitizedHtmlContent;
    this.template.subject = this.subject;

    this.eService.sendDemos(this.template).subscribe(
      (response) => {
        this.openSnackBar('Template sent successfully','OK');
      },
      (error) => {
        this.openSnackBar('Error sending template','OK');
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }

}
