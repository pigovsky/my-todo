import { Task } from '../models/Task';
import {Observable} from 'rxjs/Rx';

export interface TasksDao {
  create(task: Task): Observable<Array<Task>>
  replace(tasks: Array<Task>): Observable<Array<Task>>
  getAll(): Observable<Array<Task>>
  delete(id: number): Observable<Array<Task>>
}


