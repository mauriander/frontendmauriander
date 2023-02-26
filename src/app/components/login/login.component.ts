import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { HttpClient } from '@angular/common/http';

import { LoginService } from 'src/app/services/login.service';

import { ActivatedRoute } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
//import { CookieService } from 'ngx-cookie-service';

//import { LocalKey, LocalStorage } from 'ts-localstorage';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 isLogged=false;
 isLogginFail= false;
 loginUsuario!:LoginUsuario;
nombreUsuario!: string;
password!: string;
roles: string[] = [];
errMsj!: string;

constructor(private tokenService: TokenService,private authservice: AuthService,private router:Router){

}
ngOnInit(): void { 
  if(this.tokenService.getToken()){
    this.isLogged = true;
    this.isLogginFail = false;
    this.roles = this.tokenService.getAuthorities();
  }
}


onLogin():void{
this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
  this.authservice.login(this.loginUsuario).subscribe(data => {
  this.isLogged=true;
  this.isLogginFail=false;
  this.tokenService.setToken(data.token);
  this.tokenService.SetAuthorities(data.authorities);
  this.tokenService.SetUsername(data.nombreUsuario);
  this.roles= data.authorities;
  this.router.navigate(['']);
}, err => {
  this.isLogged=false;
  this.isLogginFail=true;
  this.errMsj = err.error.mensaje;
})

}

 /*
  form:FormGroup;
  // Variables que van a hacer 1 a 1 con los inputs del login
  user: String = "";
  email: String = "";
  password: String = "";
  loginerror: String = "";

  constructor(
    private loginServ:LoginService,
    private router:Router,
    private rout:ActivatedRoute, 
    private formBuilder:FormBuilder ) { 

    this.form=this.formBuilder.group(
      {
        email:['',[Validators.required]],
        password:['',[Validators.required, Validators.minLength(8)]],
      }
    )

  }
  */

//login(){  const user = { email: this.email, password: this.password };

/*
  this.loginServ.login(user).subscribe( data => {
    if(data==null) this.loginerror = "Error! Datos no válidos";

    else {
      this.loginerror = "";
      this.loginServ.setToken(data.id);
      window.location.reload();
      // me redirecciona al header
    // this.router.navigate(['header'])
    }
  });

 
}



  get Username() {
    return this.form.get('email');
  }
  get Password() {
    return this.form.get('password')
  }
  */
}
