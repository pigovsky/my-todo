import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {RemoteTaskService} from '../../providers/RemoteTaskService';
import {AddPage} from "../add-item/add-item";
import {EditPage} from "../edit/edit";
import {Observable} from "rxjs/Observable";
import {TaskServiceProvider} from "../providers/task_service";
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
 
        this.taskService.delete(JSON.parse(item).Id);

     }
	 update(item: string) {
         this.nav.push(EditPage, {
             param1: JSON.parse(item)
         })


 }
 }