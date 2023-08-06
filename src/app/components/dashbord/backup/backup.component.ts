import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BackupService} from "../../../service/backup.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.scss']
})
export class BackupComponent {

  loading:boolean = false;
  selectedFile: File | undefined;

  constructor(private http: HttpClient, private backupService: BackupService,private snackBar:MatSnackBar) {}

  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  backupDatabase() {
    this.loading = true;
    const options = {
      timeout: 60000, // Adjust the timeout value (in milliseconds)
    };

    this.backupService.requestBackup(options).subscribe(() => {
      this.loading = false;
      this.snackBar.open('Backup initiated','OK');
    }, error => {
      this.loading = false;
      this.snackBar.open('Error initiating backup','OK');
    });
  }

  downloadBackup() {
    this.backupService.downloadBackup();
  }

  restoreDatabase(): void {
    if (!this.selectedFile) {
      this.snackBar.open('No file selected','OK');
      return;
    }

    const formData = new FormData();
    formData.append('backup', this.selectedFile);

    this.backupService.restoreBackup(formData).subscribe(() => {
      this.snackBar.open('Database restored','OK');
    }, error => {
      this.snackBar.open('Error restoring database. try again!','OK');
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }

}
