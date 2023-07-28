import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  public loginSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private _http: HttpClient) {
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
        `https://intranetapi.addosser.com/api/mail/send-multiple`,
        payload
      )
      .pipe();
  }
}
