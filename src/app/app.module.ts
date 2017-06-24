import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddPage } from '../pages/add/add';
import { EditPage } from '../pages/edit/edit';
import { TaskDaoImpl } from '../models/TaskDaoImpl';
import { LocalTaskService } from '../service/LocalTaskService';
import { TaskServiceRepository } from '../service/TaskServiceRepository';
import { RemoteTaskService } from '../service/RemoteTaskService';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPage,
    EditPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPage,
    EditPage,
  ],

  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler },
    LocalTaskService,
    TaskServiceRepository,
    RemoteTaskService,
    TaskDaoImpl]
  })
})
export class AppModule {}
