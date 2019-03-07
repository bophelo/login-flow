import { AlertController, NavController } from "@ionic/angular";
import { AuthenticationService } from "./../../services/authentication.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  email: string = "";
  password: string = "";
  errorMsg: string;
  constructor(
    private authService: AuthenticationService,
    private alertController: AlertController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  login() {
    if (this.email.trim() !== "") {
      console.log(this.email.trim() + " " + this.password.trim());
      if (this.password.trim() === "") {
        this.errorFunc("Please enter your password");
      } else {
        let credentials = {
          email: this.email,
          password: this.password
        };
        this.authService.login(credentials).then(
          result => {
            console.log(result);
          },
          err => {
            console.log(err);
            this.errorFunc("Wrong Credentials, please try again");
            console.log("Credentials: " + JSON.stringify(credentials));
          }
        );
      }
    } else {
      this.errorFunc("Please enter a valid password");
    }
    console.log(console.log(this.email.trim() + " " + this.password.trim()));
  }

  async errorFunc(message) {
    let alert = await this.alertController.create({
      header: "Warning!",
      subHeader: message,
      buttons: ["Ok"]
    });
    await alert.present();
  }

  logout() {
    this.authService.logout();
  }
}
