import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {ApiService} from '../../providers/api-service';

@Component({
    templateUrl: '../add/add.html',
    providers: [ApiService]
})

export class AddPage {
    public todoItem: string;

    constructor(public apiService: ApiService,private nav: NavController) {
        this.todoItem = "";
    }

    save() {
        if (this.todoItem != "") {
            var data = {State:true,Value: this.todoItem};
            console.log(data);
            this.apiService.save(data);
            this.nav.pop();
        }
    }

}
