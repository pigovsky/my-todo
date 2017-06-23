import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { TasksDao } from '../../app/daos/TasksDao';
import { TasksDaoImpl } from '../../app/daos/TasksDaoImpl';
import { Task } from '../../app/models/Task';
import { SyncStatus } from '../../app/models/SyncStatus';
import { NavController } from 'ionic-angular';

@Injectable()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers : [TasksDaoImpl] 
})
export class HomePage {

  items: Array<Task>

  constructor(public navCtrl: NavController, private tasksDao: TasksDaoImpl) {
    this.loadTasks();
  }

  loadTasks() {
    this.tasksDao.getAll()
    .subscribe(items => {
       this.items = items;
       console.log(items);
    });	
  }

  addItem() {
    let id = this.items.length;
    this.tasksDao.create(new Task(id, "beliberda" + id, SyncStatus.New))
      .subscribe(x => {
         console.log("create result " + x);
         this.loadTasks();
      });
  }

  delete(item) {
    this.tasksDao.delete(item.id)
      .subscribe(x => {
         console.log("delete result " + x);
         this.loadTasks();
      });
  }
}


