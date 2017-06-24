import { Storage } from '@ionic/storage';
import { Task } from '../models/Task';
import { SyncStatus } from '../models/SyncStatus';
import { TasksDao } from './TasksDao';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class TasksDaoImpl implements TasksDao {

  constructor(public storage: Storage) {
  }

  create(task: Task) : Observable<Number> {
	  return this.getAll()
    .map(all => {
      task.id = all[all.length-1].id + 1;
      task.syncStatus = SyncStatus.New;
      if (all === null)
        return [task];
      else {
        console.log( (typeof all) + " " + all);
        all.push(task);
      }
      return all;
    })
    .flatMap(all => this.replace(all))
    .map(all => all[all.length - 1].id);
  }

  replace(tasks: Array<Task>): Observable<Array<Task>> {
    return Observable.fromPromise(this.storage.set("tasks", JSON.stringify(tasks)))
      .map(str => JSON.parse(str));
  }

  private containTask(all: Array<Task>, task: Task): boolean {
    var found = false;
    all.forEach(t => {
      if (t.id == task.id) {
        found = true;
      }
    })
    return found;
  }

  add(additional: Array<Task>): Observable<Array<Task>> {
    return this.getAll()
    .map(all => {
      additional.forEach(a => {
        if (!this.containTask(all, a))
          all.push(a);
      });
      return all;
    })
    .flatMap(all => this.replace(all))
  }

  getAll(): Observable<Array<Task>> {
    return Observable.fromPromise(this.storage.get("tasks"))
       .map(str => JSON.parse(str))
       .map(all => {
          if (all === null) 
            return []; 
          return all;
        });
  }

  delete(id: number) : Observable<Array<Task>> {
    return this.getAll()
      .map(all => {
        all.forEach (task => {
          if(task.id === id) 
            all.splice(all.indexOf(task), 1);
        });
        return all;
      })
    .flatMap(all => this.replace(all));
  }
}

