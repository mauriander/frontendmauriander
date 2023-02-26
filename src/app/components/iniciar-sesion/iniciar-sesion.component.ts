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
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario.model';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
})
export class IniciarSesionComponent implements OnInit {
 // form: FormGroup;
 submitted = false;
 closeResult="";
  isLogged=false;
  isLogginFail= false;
  loginUsuario!:LoginUsuario;
 nombreUsuario!: string;
 password!: string;
 roles: string[] = [];
 errMsj!: string;
 

 nuevoUsuario!:NuevoUsuario;
 nuevoNombre!: string;
 nuevoNombreUsuario!: string;
 nuevoEmail!:string;
 nuevoPassword!: string;
 nuevoRoles: string[] = [];
 constructor(private tokenService: TokenService,private authservice: AuthService,private router:Router,private formBuilder: FormBuilder, public modal:NgbModal, public activeModal: NgbActiveModal){
 
 }
 ngOnInit(): void { 
   if(this.tokenService.getToken()){
     this.isLogged = true;
     this.isLogginFail = false;
     this.roles = this.tokenService.getAuthorities();
   }
 }

 onNewUser():void{
  this.nuevoUsuario = new NuevoUsuario(this.nuevoNombre,this.nuevoNombreUsuario, this.nuevoEmail, this.nuevoPassword, this.nuevoRoles);
  this.authservice.nuevo(this.nuevoUsuario).subscribe(data => { 
    
    this.router.navigate(['/iniciar-sesion']);
  })
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
   this.router.navigate(['/portfolio']);
   
 }, err => {
   this.isLogged=false;
   this.isLogginFail=true;
   this.errMsj = err.error.mensaje;
 })
 
 }









 open(content:any) {
  this.modal.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}


  //loginForm: any;

  //construcctor formbyuilder
/*  constructor(
    private formBuilder: FormBuilder,
    private autenticationService: AutenticacionService,
    private ruta: Router,
    private http: HttpClient
  ) {
    //copiamos 'accesstoken' insertamo como un JSON
    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
     
    });
  }*/

  /*
  login3(){
    let usuar:Usuario={
      email: this.form.value.email,
      password: this.form.value.pass,
      
    }
    this.autenticationService.login3(usuar)
    
  }*/



  /*
  login(event:Event){
    alert("entro al de Autenticacion debo paserle informacion credencial a la API LOGIN");
     event.preventDefault;
    this.autenticationService.IniciarSesion(this.form.value).subscribe(data=>{
     // this.autenticationService.login(this.form.get('email')?.value, this.form.get('password')?.value).subscribe(data=>{
      //alert("DATA: "+JSON.stringify(data))  ;
      console.log("DATA: " + JSON.stringify(data));
      //Y lo mando a portfolio
      this.ruta.navigate(['/portfolio']);

    })

  }
------------------------------------------------------------------------------------------

ngOnInit(): void {
  }

  get Username(){
    return this.form.get('username');
  }

  get Password(){
    return this.form.get('password');
  }

  onSubmit(event:Event){
    event.preventDefault;
    this.authService.iniciarSesion(this.form.value)
    .subscribe(data=>{
      console.log("DATA:" + JSON.stringify(data));
      this.ruta.navigate(["/portfolio"]);
    })

  }



 */

  //con este metodo enviamos informacion credencial a la APi
 /* onEnviar(event: Event) {
    alert(
      'entro al de Autenticacion debo paserle informacion credencial a la API On envibar'
    );
    event.preventDefault;
    this.autenticationService
      .IniciarSesion(this.form.value)
      .subscribe((data) => {
        // this.autenticationService.login(this.form.get('email')?.value, this.form.get('password')?.value).subscribe(data=>{
        //alert("DATA: "+JSON.stringify(data))  ;
        console.log('DATA DE ON ENVIAR: ' + JSON.stringify(data));
        alert('Lo mando al portgfolio');
        //Y lo mando a portfolio
        this.ruta.navigate(['/portfolio']);
      });
      //Harcodeo el navigate
      this.ruta.navigate(['/portfolio']);
  }*/
}
