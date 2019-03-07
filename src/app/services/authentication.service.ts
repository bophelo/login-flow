import { Platform } from "@ionic/angular";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { Storage } from "@ionic/storage";
import { apiKey } from "../../app/apiurl/serverurl.js";
import { Http, Headers } from "@angular/http";

const TOKEN_KEY = "auth-token";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private token: any;
  authenticationState = new BehaviorSubject(false);

  constructor(
    private storage: Storage,
    private plt: Platform,
    private http: Http
  ) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  register(details) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Content-Type", "application/json");

      this.http
        .post(apiKey + "auth/register", JSON.stringify(details), {
          headers: headers
        })
        .subscribe(
          res => {
            let data = res.json();
            //this.token = data.token;
            resolve(data);
          },
          err => {
            reject(err);
          }
        );
    });
  }

  login(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Access-Control-Allow-Origin", "*");
      headers.append("Access-Control-Allow-Origin", "POST, GET, OPTIONS, PUT");
      headers.append("Accept", "application/json");
      headers.append("Content-Type", "application/json");

      this.http
        .post(apiKey + "api/user/login", JSON.stringify(credentials), {
          headers: headers
        })
        .subscribe(
          res => {
            let data = res.json();
            this.token = data.token;
            this.storage.set("token", data.token);
            this.authenticationState.next(true);
            resolve(data);
          },
          err => {
            reject(err);
          }
        );
    });
    /*return this.storage.set(TOKEN_KEY, "Bearer 123456").then(res => {
      this.authenticationState.next(true);
    });*/
  }

  logout() {
    //this.storage.remove('token')
    return this.storage.remove("token").then(() => {
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  checkToken() {
    //checkToken
    return new Promise((resolve, reject) => {
      this.storage.get("token").then(value => {
        if (value) {
          this.token = value;
          resolve(this.token);
        }
      });
    });
    /*return this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    });*/
  }
}
