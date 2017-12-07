import { Injectable } from '@angular/core';
import {MiHttpService} from './mi-http/mi-http.service';

@Injectable()
export class LoginService {

  constructor(private http:MiHttpService) { }

  url:string = "http://localhost/api/login/";

  public VerificarUsuario(usuario:Object)
  {
    return this.http.httpPostP(this.url,usuario);
  }
}
