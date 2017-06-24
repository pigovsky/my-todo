import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {RemoteTaskService} from '../../providers/RemoteTaskService';

@Component({
  templateUrl: 'edit.html',
    providers: [RemoteTaskService]
})
export class EditPage {

  public todoItemObj: any;
  public todoItem: string;

  constructor(public apiService: RemoteTaskService, private nav: NavController, private navParams: NavParams) {
    this.todoItemObj =navParams.get('param1');
    this.todoItem  = this.todoItemObj.Value;
  }

  update() {
    if (this.todoItem != "" || this.todoItem==null) {
      this.todoItemObj.Value = this.todoItem;
      this.apiService.update(this.todoItemObj);
      this.nav.pop();
    }
  }


}
