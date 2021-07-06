import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TC2Frontend';

  isNotLogged(){
    if(sessionStorage.getItem('user') != null){
      return false;
    } else{
      return true;
    }
  }
}
