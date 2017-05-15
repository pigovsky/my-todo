import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public items = []

  constructor(public navCtrl: NavController, public http: Http) {
    this.http.get('/api/values').map(res => res.json()).subscribe(data => {
      this.items = data;
    });
  }

  addItem() {
    this.items.push({ title: "beliberda" })
  }

  delete(item) {
    console.log("delete item " + item.title);
    this.items.splice(this.items.indexOf(item), 1);
  }
}


