import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Config } from '../../model/config';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {
  public configData: Config;
  public ViewModel: any = {
    UserID: '',
    Password: ''
  };
  constructor(private configService: ConfigService, private snackBar: MatSnackBar, private router: Router, private rootComponent: AppComponent) { }

  ngOnInit() {
    this.rootComponent.checkLogin();
    this.configService.getConfig();
  }

  Login() {
    return this.configService.http.post(this.configService.getApiURL() + 'oauth/token', {
      GrantType: '0',
      ClientID: localStorage.getItem('ClientID'),
      UserID: this.ViewModel.UserID,
      Password: this.ViewModel.Password
    })
    .subscribe(
    (result: any) => {
      localStorage.setItem('AccessToken', result.AccessToken);
      this.snackBar.open('登入成功', 'Ok', {
        duration: 2000, // 出現幾秒
        // horizontalPosition: 'left' // 水平顯示位置可調整，預設為中心往上
      });
      this.rootComponent.checkLogin();
      this.router.navigate(['/tri001']);
    },
    (error) => {
      let errorData: string;
      errorData = error.error.ExtraData.ErrorMsg;
      this.snackBar.open(errorData, 'Ok', {
        duration: 2000, // 出現幾秒
        // horizontalPosition: 'left' // 水平顯示位置可調整，預設為中心往上
      });
    });
  }
}
