import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import {RemoteTaskService} from '../../providers/RemoteTaskService';
import {TaskServiceProvider} from "../providers/task_service";
import {Task} from "../../models/Task";
import {SyncStatus} from "../../models/SyncStatus";
 
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
  providers: [TaskServiceProvider]
})
export class AddItemPage {
 
  title;
  description;
 
      constructor(public taskService: TaskServiceProvider, private nav: NavController) {
         this.todoItem = "";
     }
 
     save() {
         if (this.todoItem != "") {
             var data = new Task(0,this.todoItem,SyncStatus.New);
             console.log(data);
             this.taskService.add(data);
             this.nav.pop();
         }
     }
}
