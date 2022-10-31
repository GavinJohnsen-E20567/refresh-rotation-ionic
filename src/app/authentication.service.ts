import { Injectable } from '@angular/core';
import { IonicAuth } from '@ionic-enterprise/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends IonicAuth {
  constructor() {
    super({
      authConfig: 'auth0',
      platform: 'web',
      clientID: 'xxx',
      discoveryUrl: 'https://dev-xxx.us.auth0.com/.well-known/openid-configuration',
      redirectUri: 'http://localhost:4200/oauth/callback',
      logoutUrl: 'http://localhost:4200/',
      scope: 'openid',
      implicitLogin: 'POPUP',
      tokenStorageProvider: 'localStorage',
      logLevel: 'DEBUG'
    })
  }
}
