import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {TaskDao} from "../../models/TaskDao";
import {Task} from "../../models/Task";
import {ITaskService} from "../ITaskService";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LocalTaskServiceProvider implements ITaskService {

  constructor(public http: Http, public taskDao:TaskDao) {
  }

  all(): Observable<Array<Task>> {
    return this.taskDao.all();
  }

  add(task: Task): Observable<Number> {
    return  Observable.of(this.taskDao.add(task));
  }

  delete(task: Task): Observable<Number> {
    return Observable.of(this.taskDao.delete(task));
  }

  deleteAll(){
    this.taskDao.deleteAll();
  }

  }
