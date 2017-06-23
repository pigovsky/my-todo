 import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
 import { MyApp } from './app.component';		  import { MyApp } from './app.component';
 import { HomePage } from '../pages/home/home';		  import { HomePage } from '../pages/home/home';
 import { AddItemPage } from '../pages/add-item/add-item';
 import { ItemDetailPage } from '../pages/item-detail/item-detail';
  
  @NgModule({		  @NgModule({
    declarations: [		    declarations: [
      MyApp,		      MyApp,
     HomePage		 +    HomePage,
     AddItemPage,
     ItemDetailPage
    ],		    ],
    imports: [		    imports: [
      IonicModule.forRoot(MyApp)		      IonicModule.forRoot(MyApp)
    ],		    ],
    bootstrap: [IonicApp],		    bootstrap: [IonicApp],
    entryComponents: [		    entryComponents: [
      MyApp,		      MyApp,
     HomePage		 +    HomePage,
     AddItemPage,
     ItemDetailPage
    ],		    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]		    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
  })		  })
 -export class AppModule {}		 +export class AppModule {}
