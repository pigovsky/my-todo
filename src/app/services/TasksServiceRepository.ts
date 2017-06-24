import {TasksService} from "./TasksService"
import {Observable} from 'rxjs/Rx';
import { Task } from '../models/Task';
import { LocalTasksServiceImpl } from "./LocalTasksServiceImpl"
import { RemoteTasksServiceImpl } from "./RemoteTasksServiceImpl"
import { TasksDaoImpl } from "../daos/TasksDaoImpl"
import { Injectable } from '@angular/core';

@Injectable()
export class TasksServiceRepository implements TasksService {

    constructor(
        private tasksDao: TasksDaoImpl,
        private localTasksService: LocalTasksServiceImpl,
        private remoteTasksServiceImpl: RemoteTasksServiceImpl
    ) {}

    getAll(): Observable<Array<Task>> {
        return Observable.concat(
            this.localTasksService.getAll(),
            this.remoteTasksServiceImpl.getAll().flatMap(
                fromServer => {
                    return this.tasksDao.add(fromServer);
                }
            )
        ).map(
            all => {
                console.log("[TasksServiceRepository] getAll " + all);
                return all;
            }
        );
    }

    create(task: Task): Observable<Number> {
        return this.localTasksService.create(task);
    }

    delete(id: number): Observable<Boolean> {
        return this.localTasksService.delete(id);
    }
}