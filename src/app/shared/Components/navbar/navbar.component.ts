import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userID:any;
  userData:any;
  isLogged:any;

  constructor(private UserService:UserService, private router:Router){}

  ngOnInit(){
    this.userData = JSON.parse(localStorage.getItem('UserData') || '{}')[0];
    this.isLogged = Object.entries(this.userData).length !== 0;
  }
  
  logOut(){
    localStorage.clear();
    window.location.reload();
  }
}
