import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../pages/item add';
  		  
 @Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
 
  }
 
  ionViewDidLoad(){
 
  }
  addItem(){
 
    let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
 
  }

  delete(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  saveItem(item){
    this.items.push(item);
  }

  viewItem(item){
  this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }
}
