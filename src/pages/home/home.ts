import { Component } from '@angular/core';
import {NavController } from 'ionic-angular';
import {AddPage} from "../add/add";

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

    public items: Array<string>;
 
    constructor(private nav: NavController) { }
 
    ionViewDidEnter () {
        
        this.items = JSON.parse(localStorage.getItem("todos"));
        if (!this.items) {
            this.items = [];
        }
    }
 
    delete(index: number) {
        this.items.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(this.items));
    }
 
    addItem() {
        this.nav.push(AddPage);
    }
}


