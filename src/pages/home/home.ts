import { Component } from '@angular/core';
import { AddItemPage } from '../pages/item add';
  		  
  @Component({		  @Component({
    selector: 'page-home',		    selector: 'page-home',
    templateUrl: 'home.html'		    templateUrl: 'home.html'
  })		  })
  export class HomePage {		  export class HomePage {
  		  

             this.saveItem(item);
           }
  
     });
  
     addModal.present();
  
    }		    }
  		  
    delete(item) {		    delete(item) {

 
   saveItem(item){
     this.items.push(item);
   }
 
   viewItem(item){
   this.navCtrl.push(ItemDetailPage, {
       item: item
     });
   }
  }		  }
  		  
