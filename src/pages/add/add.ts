import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {RemoteTaskService} from '../../providers/RemoteTaskService';
import {TaskServiceProvider} from "../../providers/task-service/task-service";
import {Task} from "../../models/Task";
import {SyncStatus} from "../../models/SyncStatus";

@Component({
    templateUrl: '../add/add.html',
    providers: [TaskServiceProvider]
})

export class AddPage {
    public todoItem: string;

    constructor(public taskService: TaskServiceProvider, private nav: NavController) {
        this.todoItem = "";
    }

    save() {
        if (this.todoItem != "") {
            var data = new Task(0,this.todoItem,SyncStatus.New);
            this.taskService.add(data);
            this.nav.pop();
        }
    }

}