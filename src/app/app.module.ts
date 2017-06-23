import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddItemPage } from '../pages/add-item/add-item';
import { LocalTaskServiceProvider } from '../providers/local-task-service';
import { TaskServiceProvider } from '../providers/task-service';
import { RemoteTaskService } from "../providers/RemoteTaskService";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	AddItemPage,
	EditPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
	IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	AddItemPage,
	EditPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
   LocalTaskServiceProvider,
   TaskServiceProvider,
   RemoteTaskService]
})
export class AppModule {}
