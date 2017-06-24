/**
 * Created by nico on 24.06.17.
 */

import {Observable} from 'rxjs/Rx';
import {Task} from "../models/Task";
import {ITaskService} from './ITaskService';
import {Injectable} from "@angular/core";
import {AlertController} from "ionic-angular";
import {Http, Headers} from "@angular/http";
import {LocalTaskService} from "./LocalTaskService";

@Injectable()
export class RemoteTaskService implements  ITaskService{

    public data: any;
    private headers;
    public offline;
    public online;
    private alertControler;

    constructor(public http: Http,  private alertCtrl: AlertController,
                public localServiceProvider: LocalTaskService) {
        this.headers = this.createAuthHeader()
        this.offline = Observable.fromEvent(window, "offline");
        this.online = Observable.fromEvent(window, "online");
        this.alertControler = alertCtrl;
    }

    createAuthHeader() {
        let headers = new Headers();
        headers.append(
            "Token",
            "59E698CCB8EC056E279EF79E20E7F928"
        );
        return headers;
    }

    all(): Observable<Array<Task>> {
        return  this.http.get(
            '/api/Task/',
            {headers: this.headers}
        ).map(res => res.json())
    }

    add(task: Task): Observable<Number> {
        return this.http.post(
            '/api/Task/',
            task,
            {headers: this.headers}
        ).map(res => res.json().status)
    }

    delete(task: Task): Observable<Number> {
        return this.http.post(
            '/api/Task/' + task.id,
            {headers: this.headers}
        ).map(res => res.json().status)
    }

    update(data: any) {
        this.http.put('/api/Task/' + data.Id, data, {headers: this.headers})
            .subscribe(data => {
                    console.log(data.status);
                }, error => {
                    console.log("Oooops!");
                }
            );
    }

}