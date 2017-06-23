import { Storage } from '@ionic/storage';
import { Task } from '../models/Task';
import { TasksDao } from './TasksDao';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TasksDaoImpl implements TasksDao {

  constructor(public storage: Storage) {
  }

  create(task: Task) : Observable<Array<Task>> {
	  return this.getAll()
    .map(all => {
      if (all === null)
        return [task];
      else {
        console.log( (typeof all) + " " + all);
        all.push(task);
      }
      return all;
    })
    .flatMap(all => this.replace(all));
  }

  replace(tasks: Array<Task>): Observable<Array<Task>> {
    return Observable.fromPromise(this.storage.set("tasks", JSON.stringify(tasks)))
      .map(str => JSON.parse(str));
  }

  getAll(): Observable<Array<Task>> {
    return Observable.fromPromise(this.storage.get("tasks"))
       .map(str => JSON.parse(str));
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

