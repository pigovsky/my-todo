import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Alert, AlertController, NavController} from 'ionic-angular';
import {Network} from 'ionic-native';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {LocalTaskServiceProvider} from "./local-task-service/local-task-service";
import {ITaskService} from "./ITaskService";
import {Task} from "../models/Task";

/*
 Generated class for the RemoteTaskService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class RemoteTaskService implements  ITaskService{

    public data: any;
    private headers;
    public offline;
    public online;
    private alertControler;

    constructor(public http: Http, public nav: NavController, private alertCtrl: AlertController,
                public localServiceProvider: LocalTaskServiceProvider) {
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
            'http://myfirstapisarmkadan.azurewebsites.net/api/Task/',
            {headers: this.headers}
        ).map(res => res.json())
    }

    add(task: Task): Observable<Number> {
        return this.http.post(
                'http://myfirstapisarmkadan.azurewebsites.net/api/Task/',
                task,
                {headers: this.headers}
            ).map(res => res.json().status)
    }

    delete(task: Task): Observable<Number> {
        return this.http.post(
            'http://myfirstapisarmkadan.azurewebsites.net/api/Task/' + task.id,
                {headers: this.headers}
            ).map(res => res.json().status)
    }

    update(data: any) {
        this.http.put('http://myfirstapisarmkadan.azurewebsites.net/api/Task/' + data.Id, data, {headers: this.headers})
            .subscribe(data => {
                    console.log(data.status);
                }, error => {
                    console.log("Oooops!");
                }
            );
    }

    load() {
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(resolve => {
            this.http.get(
                'http://myfirstapisarmkadan.azurewebsites.net/api/Task/',
                {headers: this.headers}
            )
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    if (data.status === 200)
                        this.localServiceProvider.add(data);
                    else
                        this.data = this.localServiceProvider.all();
                    resolve(this.data);
                });
        });
    }
    //
    // save(todo: any) {
    //     this.http.post(
    //         'http://myfirstapisarmkadan.azurewebsites.net/api/Task/',
    //         todo,
    //         {headers: this.headers}
    //     )
    //         .subscribe(data => {
    //                 console.log(data.status);
    //             }, error => {
    //                 this.localServiceProvider.add(todo);
    //                 this.online.subscribe(() => {
    //                     console.log("online!");
    //                     this.sync();
    //                 });
    //                 console.log("Oooops!");
    //             }
    //         );
    // }
    //
    // update(data: any) {
    //     this.http.put('http://myfirstapisarmkadan.azurewebsites.net/api/Task/' + data.Id, data, {headers: this.headers})
    //         .subscribe(data => {
    //                 console.log(data.status);
    //             }, error => {
    //                 console.log("Oooops!");
    //             }
    //         );
    // }
    //
    // delete(todo: any) {
    //     this.http.delete(
    //         'http://myfirstapisarmkadan.azurewebsites.net/api/Task/' + todo.Id,
    //         {headers: this.headers}
    //     )
    //         .subscribe(data => {
    //                 console.log(data.status);
    //             }, error => {
    //                 console.log("Oooops!");
    //                 this.localServiceProvider.delete(todo);
    //             }
    //         );
    // }
    //
    //
    // sync() {
    // }

}
