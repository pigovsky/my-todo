import {ITaskDao} from "./ITaskDao";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class TaskDao implements ITaskDao{
    constructor(public http: Http) {}

    all(){
        return JSON.parse(localStorage.getItem("todos"));
    }

    add(todoItem){
        if (typeof todoItem === "string") {
            let items = JSON.parse(localStorage.getItem("todos"))
            items.push(todoItem);
            localStorage.setItem("todos", JSON.stringify(items));
        }
        else {
            localStorage.setItem("todos", JSON.stringify(todoItem));
        }
        return true;
    }

    delete (todo){
        let items = JSON.parse(localStorage.getItem("todos"))
        let index = items.indexOf(todo);
        items.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(items));
        return true;
    }

    deleteAll(){
        localStorage.removeItem("todos");
    }

}