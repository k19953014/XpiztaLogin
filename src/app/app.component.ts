import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Xpizta';
  isLogin = false;

  constructor(private router: Router, private zone: NgZone) {}

  ngOnInit() {
    this.checkLogin();
    this.router.navigate(['/Login']);
  }

  public checkLogin() {
    let token: string;
    token = localStorage.getItem('AccessToken');
    if (token && token !== '') {
      this.isLogin = true;
      this.router.navigate(['/tri001']);
    } else {
      this.isLogin = false;
    }
  }
  // toggleMenu() {
  //   debugger;
  //   this.zone.run(() => {
  //   this.menuState = this.menuState === 'out' ? 'in' : 'out';
  //  });
  // }
}
