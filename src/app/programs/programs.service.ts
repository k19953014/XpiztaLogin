import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  constructor(public snackBar: MatSnackBar, public http: HttpClient) { }

  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 1000, // 出現幾秒
      // horizontalPosition: 'left' // 水平顯示位置可調整，預設為中心往上
    });
  }

  public getYouBikeData() {
      const URL = '/api/v1/rest/datastore/382000000A-000352-001';
      return this.http.get<any>(URL);
  }

  public HandleError(e: any): void {
    // console.log(e);
    alert(e.error.error);
  }

}
