import {TasksService} from "./TasksService"
import {Observable} from 'rxjs/Rx';
import { Task } from '../models/Task';
import { SyncStatus } from '../models/SyncStatus';
import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

class RemoteTask {
    constructor(
        public Id: number,
        public Value: string
    ) {}
}

@Injectable()
export class RemoteTasksServiceImpl implements TasksService {

    Url = 'http://myfirstapisarmkadan.azurewebsites.net/api/Task/';

    constructor(
        private http: Http
    ) {}

    getAll(): Observable<Array<Task>> {
        let all: Observable<Array<RemoteTask>> = 
            this.http.get(this.Url, {headers: this.buildHeader()})
            .map(res => res.json())
            .map(all => {
                console.log("[RemoteTasksServiceImpl] getAll " + all);
                return all;
            })

        return all.flatMap(x => Observable.from(x))
            .map(t => { 
                console.log("transform task " + JSON.stringify(t));
                return new Task(
                    t.Id,
                    t.Value,
                    SyncStatus.Synced
            );
        }).toArray();
    }

    create(task: Task): Observable<Number> {
        return this.http.post(this.Url, task, {headers: this.buildHeader()})
            .map(res => res.json())
            .map(x => {
                console.log("create " + x);
                return x;
            });
    }

    delete(id: number): Observable<Boolean> {
        return this.http.delete(this.Url + "/" + id, {headers: this.buildHeader()})
            .map(res => res.json())
            .map(x => {
                console.log("delete " + x);
                return x;
            });
    }

    private buildHeader(): Headers {
        let headers = new Headers();
        headers.append(
            "Token",
            "59E698CCB8EC056E279EF79E20E7F928"
        );
        return headers;
    }
}