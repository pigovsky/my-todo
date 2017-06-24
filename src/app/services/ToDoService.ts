import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
  
export class ToDoService {  
    static get parameters() {
        return [[Http]];
    }
  
    constructor(private http:Http) {
         
    }
  
}