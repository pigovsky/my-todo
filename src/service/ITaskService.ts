/**
 * Created by nico on 24.06.17.
 */
import {Observable} from 'rxjs/Rx';
import {Task} from "../models/Task";

export interface ITaskService {
    all(): Observable<Array<Task>>
    add(task: Task): Observable<Number>
    delete(task: Task): Observable<Number>
}