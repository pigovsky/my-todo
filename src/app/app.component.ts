 import { StatusBar, Splashscreen } from 'ionic-native';
  
  import { HomePage } from '../pages/home/home';
 +import {AddPage} from "../pages/add/add";
 +import {EditPage} from "../pages/edit/edit";
  
  
  @Component({
 @@ -18,5 +20,7 @@ export class MyApp {
        StatusBar.styleDefault();
        Splashscreen.hide();
      });
 +
 +
    }
  }