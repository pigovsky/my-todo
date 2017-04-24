import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
  
export class ToDoService {  
    static get parameters() {
        return [[Http]];
    }
  
    constructor(private http:Http) {
         
    }
  
    getAll() {
        var url = 'http://myfirstapisarmkadan.azurewebsites.net/api/values/';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }
}