import {Observable} from 'rxjs/Rx';
import { Task } from '../models/Task';


export interface TasksService {
    getAll(): Observable<Array<Task>>
    create(task: Task): Observable<Number>
    delete(id: Number): Observable<Boolean>
}
