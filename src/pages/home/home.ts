import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {RemoteTaskService} from '../../providers/RemoteTaskService';
import {AddPage} from "../add/add";
import {EditPage} from "../edit/edit";
import {Observable} from "rxjs/Observable";
import {TaskServiceProvider} from "../../providers/task-service/task-service";
import {Task} from "../../models/Task";



@Component({
  templateUrl: 'home.html',
    providers: [TaskServiceProvider]
})
export class HomePage {

    public items: Array<string>;
    public data: Array<Task>;

    constructor(public taskService: TaskServiceProvider, private nav: NavController, private alertCtrl: AlertController) {
    }

    loadData(){
        this.taskService.all().subscribe(
            res => {
                this.data=res;
                this.getDataForView();
            }
        );
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
        this.taskService.delete(JSON.parse(item).Id);
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



