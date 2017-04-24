import { Component } from '@angular/core';
import {ToDoService} from '../app/services/ToDoService';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ToDoService]
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

  constructor(public navCtrl: NavController, private todoService: ToDoService) {
    todoService.getAll().subscribe(
                data => {
                    this.items = data.results; 
                    console.log(data);
                },
                err => {
                    console.log(err);
                },
                () => console.log('Todo Search Complete')
            );
  }


  addItem() {
    console.log("addItem");
    this.items.push(
		{ 
        title: "beliberda"
      } 
    )
  }

  delete(item) {
    console.log("delete item " + item.title);
    this.items.splice(this.items.indexOf(item), 1);
  }
}


