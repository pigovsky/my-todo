import {Observable} from 'rxjs/Rx';
import {Task} from "../models/Task";
 
 export interface TaskService {
 all(): Observable<Array<Task>>
 add(task:Task): Observable<Number>
 delete(task:Task): Observable<Number>
 }
