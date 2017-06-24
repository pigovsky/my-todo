import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { TasksDaoImpl } from '../../app/daos/TasksDaoImpl';
import { TasksServiceRepository } from '../../app/services/TasksServiceRepository';
import { LocalTasksServiceImpl } from '../../app/services/LocalTasksServiceImpl';
import { RemoteTasksServiceImpl } from '../../app/services/RemoteTasksServiceImpl';
import { Task } from '../../app/models/Task';
import { SyncStatus } from '../../app/models/SyncStatus';
import { NavController } from 'ionic-angular';

@Injectable()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers : [TasksServiceRepository, TasksDaoImpl, LocalTasksServiceImpl, RemoteTasksServiceImpl] 
})
export class HomePage {

  items: Array<Task>

  constructor(public navCtrl: NavController, private tasksServiceRepository: TasksServiceRepository) {
    this.loadTasks();
  }

  loadTasks() {
    this.tasksServiceRepository.getAll()
    .subscribe(items => {
       this.items = items;
       console.log(items);
    });	
  }

  addItem() {
    let id = this.items.length;
    this.tasksServiceRepository.create(new Task(id, "beliberda" + id, SyncStatus.New))
      .subscribe(x => {
         console.log("create result " + x);
         this.loadTasks();
      });
  }

  delete(item) {
    this.tasksServiceRepository.delete(item.id)
      .subscribe(x => {
         console.log("delete result " + x);
         this.loadTasks();
      });
  }
}


