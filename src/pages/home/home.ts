import {Component} from '@angular/core';

import {NavController, Platform} from 'ionic-angular';

import {GoogleMapsPage} from "../google-maps/google-maps";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  googleMapsPage = GoogleMapsPage;

  constructor(public navCtrl: NavController) {

  }


}
