import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService  {
  public configUrl: string;

  constructor(public http: HttpClient) {
    this.configUrl = 'assets/config.json';
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization': 'my-auth-token'
    //   })
    // };
  }

  /**
   * 取得設定檔
   */
  getConfig() {
    this.http.get(this.configUrl)
      .subscribe(
      (result) => {
        localStorage.setItem('WEB_ROOT', result[0].WEB_ROOT);
        localStorage.setItem('ClientID', result[0].ClientID);
        // console.log(this.configData);
      },
      (error) => this.HandleError(error)
      );
  }

  getApiURL() {
    return localStorage.getItem('WEB_ROOT');
  }

  public HandleError(e: any): void {
    // console.log(e);
    alert(e.error.error);
  }

}
