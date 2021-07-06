import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }
  
  isNotLogged(){
    if(sessionStorage.getItem('user') != null){
      return false;
    } else{
      return true;
    }
  }

  deslogar(){
    sessionStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
