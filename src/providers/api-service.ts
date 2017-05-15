import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the ApiService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class ApiService {
    public data: any;

    constructor(public http: Http) {
    }

    load() {
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(resolve => {
            this.http.get('/api/values/')
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }

    save(data: any) {
        this.http.post('/api/values/', data)
            .subscribe(data => {
                    console.log(data.status);
                }, error => {
                    console.log("Oooops!");
                }
            );
    }

    update(data: any) {
        this.http.put('/api/values/'+data.Id, data)
            .subscribe(data => {
                    console.log(data.status);
                }, error => {
                    console.log("Oooops!");
                }
            );
    }

    delete(id: any) {
        console.log('/api/values/'+id);
        this.http.delete('/api/values/'+id)
            .subscribe(data => {
                    console.log(data.status);
                }, error => {
                    console.log("Oooops!");
                }
            );
    }


}
