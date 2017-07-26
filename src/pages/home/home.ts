import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public authData: AuthProvider) {

  }

  logoutUser(){
  	this.authData.logoutUser();
    this.navCtrl.setRoot('LoginPage');
  }

}
