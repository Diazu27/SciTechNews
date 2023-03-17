import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IAuthRes } from 'src/app/Interfaces/Interfaces';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  Email:string;
  Password:string;
  isLogged:any;

  constructor(private UserService:UserService, private router: Router){
    this.Email ="";
    this.Password="";
    this.isLogged=false;
  }

  handleLogin(){
    this.UserService.AuthUser(this.Email,this.Password).subscribe((res: {auth:any,userData:any}) => {
      this.isLogged = !res.auth;
      if(res.auth){
        localStorage.setItem('UserData', JSON.stringify(res.userData));
        this.router.navigate(['']);
      }
    });
  }
}


