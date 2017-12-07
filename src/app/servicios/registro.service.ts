import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service'; 


@Injectable()
export class RegistroService {

  url:string = "http://localhost/api/usuarios/";

  constructor(private registroSVC: MiHttpService) { }

  public NuevoUsuario(usuario:Object)
  {
    return this.registroSVC.httpPostP(this.url,usuario);
  }


}
