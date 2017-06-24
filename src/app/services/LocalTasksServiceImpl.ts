import {TasksService} from "./TasksService"
import {Observable} from 'rxjs/Rx';
import { Task } from '../models/Task';
import { TasksDaoImpl } from "../daos/TasksDaoImpl"
import { Injectable } from '@angular/core';

@Injectable()
export class LocalTasksServiceImpl implements TasksService {

    constructor(
        private tasksDao: TasksDaoImpl
    ) {}

    getAll(): Observable<Array<Task>> {
        return this.tasksDao.getAll()
            .map(a => {
                console.log("[LocalTasksServiceImpl] " + a);
                return a;
            });
    }

    create(task: Task): Observable<Number> {
        return this.tasksDao.create(task)
    }

    delete(id: number): Observable<Boolean> {
        return this.tasksDao.delete(id)
            .map(x => true);
    }
}