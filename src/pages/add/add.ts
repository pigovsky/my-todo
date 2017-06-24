import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {Task} from "../../models/Task";
import {SyncStatus} from "../../models/SyncStatus";
import {TaskServiceRepository} from "../../service/TaskServiceRepository";

@Component({
    templateUrl: '../add/add.html',
    providers: [TaskServiceRepository]
})

export class AddPage {
    public todoItem: string;

    constructor(public taskService: TaskServiceRepository, private nav: NavController) {
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
