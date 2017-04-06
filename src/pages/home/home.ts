import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [
     { 
        title: "Лекція з КППЗ"
     }, 
     { 
        title: "Практична з КППЗ"
     }, 
  ]

  constructor(public navCtrl: NavController) {
    
  }


  addItem() {
    console.log("addItem");
    this.items.push(
		{ 
		
		
        title: "Нове завдання"
		
      } 
    )
	
	alert('Нове завдання створено успішно!');
  }

  delete(item) {
    console.log("delete item " + item.title);
    this.items.splice(this.items.indexOf(item), 1);
  }

  
  
  
  
  
  
  hreff(){
	  
	  window.open("https://ionicframework.com/");
  }
  
  
  
  
  
  
  
  }




