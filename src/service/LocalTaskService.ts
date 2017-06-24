/**
 * Created by max-si-m on 24.06.17.
 */

import { Observable } from 'rxjs/Rx';
import { Task } from "../models/Task";
import { ITaskService } from './ITaskService';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { TaskDaoImpl } from "../models/TaskDaoImpl";

@Injectable()
export class LocalTaskService implements ITaskService{

  constructor(public http: Http, public taskDaoImpl:TaskDaoImpl) {
  }

  all(): Observable<Array<Task>> {
    return this.taskDaoImpl.all();
  }

  add(task: Task): Observable<Number> {
    return  Observable.of(this.taskDaoImpl.add(task));
  }

  delete(task: Task): Observable<Number> {
    return Observable.of(this.taskDaoImpl.delete(task));
  }

  deleteAll(){
    this.taskDaoImpl.deleteAll();
  }
}
