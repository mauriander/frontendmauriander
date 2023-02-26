import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  miPortfolio:any;
  @Input()onSession!:boolean;
  isLogged=false;

  constructor(private datosPortfolio: PortfolioService,private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    console.log("Datos Personales para mostrar en Head");
    if(this.tokenService.getToken()){
     // this.onSession=true;
      this.isLogged=true;
      this.datosPortfolio.obtenerDatos().subscribe(data =>{
        console.log("Datos Personales para mostrar en Head"+ JSON.stringify(data));
       // alert("Datos Personales para mostrar en Head"+ JSON.stringify(data));
        this.miPortfolio=data[0];
        
      }      
        );
    }else{
      this.isLogged=false;
     // this.onSession=false;
    }

      
  }

  onLogout():void{
    //sessionStorage.removeItem('currentUser');
    this.tokenService.logOut();
    
    window.location.reload();
  }
  

}
