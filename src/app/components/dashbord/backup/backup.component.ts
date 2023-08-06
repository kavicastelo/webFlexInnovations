import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BackupService} from "../../../service/backup.service";

@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.scss']
})
export class BackupComponent {

  constructor(private http: HttpClient, private backupService: BackupService) {}

  backupDatabase() {
    const options = {
      timeout: 60000, // Adjust the timeout value (in milliseconds)
    };

    this.backupService.requestBackup(options).subscribe(() => {
      console.log('Backup initiated successfully:');
    }, error => {
      console.error('Error initiating backup:');
    });
  }

  downloadBackup() {
    this.backupService.downloadBackup();
  }

}
