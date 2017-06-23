import { Component } from '@angular/core';
import {Http} from '@angular/http';

import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  items = [
       { 
          title: "Лекція з КППЗ"
       }, 
    ]

  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public http: Http) {
   
  this.http.get('/api/values').map(function(res){
  return res.json();}).subscribe(data=>{this.items = data;});
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
     this.items.push(item);
   }
   
    delete(item) {
      console.log("delete item " + item.title);
      this.items.splice(this.items.indexOf(item), 1);
}
}


