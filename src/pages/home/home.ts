import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public items = []

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) { }

  addItem() {
    let addModal = this.modalCtrl.create(AddItemPage);
    addModal.onDidDismiss((item) => {
      if(item){ this.saveItem(item); }
    });
    addModal.present();
  }

  saveItem(item){
    this.items.push(item);
  }

  delete(item) {
    console.log("delete item " + item.title);
    this.items.splice(this.items.indexOf(item), 1);
  }
}


