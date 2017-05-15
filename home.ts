import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item'
import { ItemDetailPage } from '../item-detail/item-detail';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    items: any;
  
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public http: Http) {
	  this.http.get('/api/values').map(res => res.json()).subscribe(data => {
        console.log(data);
		this.items = data;
    
    });
  }

ionViewDidLoad(){

}

  addItem() {
      let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
 
  }
 
  saveItem(item){
    this.items.push({
		title: item,
		State: true
  });
  }
 
viewItem(item){
  this.navCtrl.push(ItemDetailPage, {
    item: item
  });
}

  delete(item) {
    console.log("delete item " + item.title);
    this.items.splice(this.items.indexOf(item), 1);
  }
}


