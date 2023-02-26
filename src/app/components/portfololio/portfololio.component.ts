import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-portfololio',
  templateUrl: './portfololio.component.html',
  styleUrls: ['./portfololio.component.css'],
})
export class PortfololioComponent implements OnInit {
  onSession!: boolean;
 // constructor(private autenticationService: AutenticacionService) {}
constructor(private tokenService:TokenService){}

  ngOnInit(): void {
    /*if (
      sessionStorage
        .getItem('currentUser')
        ?.includes(this.autenticationService.UsuarioAutenticado.accesstoken)
        

    ) 
    */
    const token= this.tokenService.getToken();
    if(token!=null)
    {
      this.onSession = true;
    } else {
      this.onSession = false;
    }
  }
}
