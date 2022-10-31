import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private $auth: AuthenticationService, private $router: Router) { }

  async ngOnInit() {
    await this.$auth.handleLoginCallback()
    await this.$router.navigate(['/'])
  }

}
