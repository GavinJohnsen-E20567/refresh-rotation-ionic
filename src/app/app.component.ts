import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'refresh-rotation-ionic';

  constructor(private $auth: AuthenticationService) { }

  async ngOnInit() {
    /**
     * for demo of refresh rotation failure
     */
    timer(5000).subscribe(() => {
      /**
       * get access token 5 times simultaneously to simulate
       * several API requests firing when the app returns from
       * a "paused" state
       */
      this.$auth.getAccessToken()
      this.$auth.getAccessToken()
      this.$auth.getAccessToken()
      this.$auth.getAccessToken()
      this.$auth.getAccessToken()
    })
  }

  logout() {
    this.$auth.logout()
  }
  login() {
    this.$auth.login()
  }
}
