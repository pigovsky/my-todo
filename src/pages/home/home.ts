import {Component} from '@angular/core';
import {Http} from '@angular/http';

import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any;

  constructor(public navCtrl: NavController, public http: Http) {
    this.http.get('/api/values').map(function (res) {
      return res.json();
    }).subscribe(data => {
      this.items = data;
    });
  }


  addItem() {
    this.items.push(
      {
        title: "beliberda"
      }
    )
  }

  delete(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
