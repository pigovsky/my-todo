import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddPage } from "../pages/add/add";
import { EditPage } from "../pages/edit/edit";
import { LocalTaskServiceProvider } from '../providers/local-task-service/local-task-service';
import { TaskDaoProvider } from '../providers/task-dao/task-dao';
import { TaskServiceProvider } from '../providers/task-service/task-service';

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
        LocalTaskServiceProvider,
        TaskDaoProvider,
        TaskServiceProvider,
        TaskServiceProvider]
})
export class AppModule {
}