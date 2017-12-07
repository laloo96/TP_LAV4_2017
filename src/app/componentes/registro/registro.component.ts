import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {RegistroService} from '../../servicios/registro.service';
import { Route } from '@angular/router/src/config';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  
})
export class RegistroComponent implements OnInit {
  
  formulario: FormGroup;

  email:string;
  password:string;
  passwordDos:string;
  nuevoUsuario:any = {email:'',password:'',passwordDos:''};


 constructor( private miConstructor:FormBuilder, private registroSVC:RegistroService, private router:Router) { 
    
  this.formulario = new FormGroup({
      email: new FormControl('',[Validators.email,Validators.required]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      passwordDos: new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern(this.password)])
    });
 
}
 

  ngOnInit() {
    
  }

  private registrar()
  {
    var usuarios = JSON.parse(localStorage.getItem("USP"));
    
    usuarios["misUsuarios"].push({mail:this.nuevoUsuario.email,password:this.nuevoUsuario.password});

    console.log(usuarios);
    localStorage.setItem("USP",JSON.stringify(usuarios));

    let usuarioXmail = this.nuevoUsuario.email.split("@",1);
    localStorage.setItem("usuario", usuarioXmail[0]);

    this.router.navigate(['/Juegos']);
  }


}
