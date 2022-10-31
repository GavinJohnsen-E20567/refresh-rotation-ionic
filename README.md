# RefreshRotationIonic

### Demonstration of refresh token rotation failing with Ionic Auth Connect

1. Clone this repo
2. Add in Ionic enterprise credentials
3. `npm install`
4. Set `clientID` and `discoveryUrl` in `authentication.service.ts`
   - Make sure client is configured with refresh token rotation with no leeway time
   - or use the demo Auth0 client ID
5. `ng serve`
6. Click login, create an account or use the test account
7. Wait for access token to expire, then refresh the page