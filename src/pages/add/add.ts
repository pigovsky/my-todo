import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
@Component({
    templateUrl: '../add/add.html'
})

export class AddPage {

    public items: Array<string>;
    public todoItem: string;

    constructor(private nav: NavController) {
        this.items = JSON.parse(localStorage.getItem("todos"));
        if (!this.items) {
            this.items = [];
        }
        this.todoItem = "";
    }

    save() {
        if (this.todoItem != "") {
            this.items.push(this.todoItem);
            localStorage.setItem("todos", JSON.stringify(this.items));
            this.nav.pop();
        }
    }

}
