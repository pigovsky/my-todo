import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {AddPage} from "../pages/add/add";
import {EditPage} from "../pages/edit/edit";
import { LocalTaskServiceProvider } from '../providers/local-task-service/local-task-service';
import { TaskServiceProvider } from '../providers/task-service/task-service';
import {RemoteTaskService} from "../providers/RemoteTaskService";

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
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalTaskServiceProvider,
    TaskServiceProvider,
    RemoteTaskService]
})
export class AppModule {
}
