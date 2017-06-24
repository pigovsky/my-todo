import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {ITaskService} from "../ITaskService";
import {Observable} from "rxjs/Observable";
import {Task} from "../../models/Task";
import {RemoteTaskService} from "../RemoteTaskService";
import {LocalTaskServiceProvider} from "../local-task-service/local-task-service";

@Injectable()
export class TaskServiceProvider implements ITaskService {
  public data: any;
  public offline;
  public online;
  public taskService: ITaskService;
  public onlineState=false;

  constructor(public remoteTaskService: RemoteTaskService, public localTaskService: LocalTaskServiceProvider, public http: Http) {  
    this.offline = Observable.fromEvent(window, "offline");
    this.online = Observable.fromEvent(window, "online");
    this.taskService = remoteTaskService;
    this.online.subscribe(() => {
      this.taskService = remoteTaskService;
      this.onlineState = true;
      this.sync();
    });
    this.offline.subscribe(() => {
      this.taskService = localTaskService;
      this.onlineState = false;      
    });
  }

  all(): Observable<Array<Task>> {
    if (this.onlineState){
      this.sync()
    }
    return this.taskService.all();
  }

  add(task: Task): Observable<Number> {
    let res= this.taskService.add(task);
    if (this.onlineState){
      this.sync()
    }
    return res;
  }

  delete(task: Task): Observable<Number> {
    let res=  this.taskService.delete(task);
    if (this.onlineState){
      this.sync()
    }
    return res;
  }


  sync() {
    let localTasks ;
    this.localTaskService.all().subscribe(data => {
      localTasks = data;
    });
    let remoteTasks ;
    this.remoteTaskService.all().subscribe(data => {
      remoteTasks = data;
    });

    let mergedTasks = [new Set(remoteTasks.concat(localTasks))];

    for(var task in mergedTasks){
      if(!remoteTasks.includes(task)){
        this.remoteTaskService.add(JSON.parse(task));
      }
      if(!localTasks.includes(task)){
        this.localTaskService.add(JSON.parse(task));
      }
    }

  }
}