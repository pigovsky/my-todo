import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {TaskDaoImpl} from "../../models/TaskDaoImpl";
import {Task} from "../../models/Task";
import {ITaskService} from "../ITaskService";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LocalTaskServiceProvider implements ITaskService {

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
