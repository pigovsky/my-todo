/**
 * Created by U on 23.06.2017.
 */
import {Observable} from 'rxjs/Rx';
import {Task} from "../models/Task";

export interface ITaskService {
all(): Observable<Array<Task>>
add(task:Task): Observable<Number>
delete(task:Task): Observable<Number>
}