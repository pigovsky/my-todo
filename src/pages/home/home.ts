import { Component } from '@angular/core';
import {NavController } from 'ionic-angular';
import {ApiService} from '../../providers/api-service';
import {AddPage} from "../add/add";
import {EditPage} from "../edit/edit";



@Component({
  templateUrl: 'home.html',
    providers: [ApiService]
})
export class HomePage {

    public items: Array<string>;
    public data: any;
 
    constructor(public apiService: ApiService,private nav: NavController) {
    }

    loadData(){
        this.apiService.load()
            .then(data => {
                this.data = data;
                this.getDataForView();
            });

    }

    ionViewDidEnter() {
        this.loadData();
    }

    private getDataForView() {
        this.items = [];
        for (var i = 0; i < this.data.length; i++) {
            this.items.push(JSON.stringify(this.data[i]));
        }
    }
 
    addItem() {
        this.nav.push(AddPage);
    }

    delete(item: string) {
        // console.log(JSON.parse(index).Id);
        this.apiService.delete(JSON.parse(item).Id);
        // this.items.splice(index, 1);
        // localStorage.setItem("todos", JSON.stringify(this.items));
    }

    update(item: string) {
        // console.log(JSON.parse(index).Id);
        this.nav.push(EditPage, {
            param1: JSON.parse(item)
        })
        // this.items.splice(index, 1);
        // localStorage.setItem("todos", JSON.stringify(this.items));
    }
 

}



