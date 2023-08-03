import { Component } from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import DOMPurify from 'dompurify';

@Component({
  selector: 'app-email-template-editor',
  templateUrl: './email-template-editor.component.html',
  styleUrls: ['./email-template-editor.component.scss']
})
export class EmailTemplateEditorComponent {

  htmlContent: string = '';
  renderedHtml: SafeHtml = '';
  view: boolean = false;

  constructor(private sanitizer: DomSanitizer) {}

  convertHtmlToPage() {
    const sanitizedHtml = DOMPurify.sanitize(this.htmlContent);
    this.renderedHtml = this.sanitizer.bypassSecurityTrustHtml(sanitizedHtml);
    this.view ? this.view = false : this.view = true;
  }

}
