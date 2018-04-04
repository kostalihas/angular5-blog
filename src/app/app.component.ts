import { Component } from '@angular/core';
import * as firebase from 'firebase';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor() {
    var config = {
      apiKey: "AIzaSyDQX8Ia_so_bcTh9j2ZQ_NlqGMm49RYPEo",
      authDomain: "htpp-client-opclassrm.firebaseapp.com",
      databaseURL: "https://htpp-client-opclassrm.firebaseio.com",
      projectId: "htpp-client-opclassrm",
      storageBucket: "htpp-client-opclassrm.appspot.com",
      messagingSenderId: "23154219615"
    };
    firebase.initializeApp(config);
  }


}
