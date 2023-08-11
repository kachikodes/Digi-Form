import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ng2ImgMaxService } from 'ng2-img-max';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  public loginSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  fileSizeUnit: number = 1024;
  constructor(
    private _http: HttpClient,
    private ng2ImgMax: Ng2ImgMaxService
    ) {
    this.loginSubject.asObservable().subscribe({
      next: (res: any) => {
        console.log(res);
        // this.loginData = res?.data;
      },
      error: (err: { error: any }) => {
        console.log(err.error);
      },
    });
  }

  onSendMultipleMail(payload: any) {
    return this._http
      .post<any>(
        `http://intranet.atlas.ng/api/mail/send-multiple`,
        payload
      )
      .pipe();
  }

  compressImage(file: File, maxSizeInMB: number) {
    this.ng2ImgMax.compressImage(file, maxSizeInMB)
      .subscribe(compressedImage => {
        console.log(compressedImage)
        file = compressedImage;
        // Do whatever you want to do with the compressed file, like send to server.
      }, error => {
        console.log(error.reason);
     });

     return file;
  }

  getFileSize(fileSize: number): number {
    if (fileSize > 0) {
      if (fileSize < this.fileSizeUnit * this.fileSizeUnit) {
        fileSize = parseFloat((fileSize / this.fileSizeUnit).toFixed(2));
      } else if (
        fileSize <
        this.fileSizeUnit * this.fileSizeUnit * this.fileSizeUnit
      ) {
        fileSize = parseFloat(
          (fileSize / this.fileSizeUnit / this.fileSizeUnit).toFixed(2)
        );
      }
    }

    return fileSize;
  }

  getFileSizeUnit(fileSize: number) {
    let fileSizeInWords = 'bytes';

    if (fileSize > 0) {
      if (fileSize < this.fileSizeUnit) {
        fileSizeInWords = 'bytes';
      } else if (fileSize < this.fileSizeUnit * this.fileSizeUnit) {
        fileSizeInWords = 'KB';
      } else if (
        fileSize <
        this.fileSizeUnit * this.fileSizeUnit * this.fileSizeUnit
      ) {
        fileSizeInWords = 'MB';
      }
    }

    return fileSizeInWords;
  }
}
