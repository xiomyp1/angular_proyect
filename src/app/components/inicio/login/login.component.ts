import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Usuario } from '../../../models/usuario'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  
  //FormGroup es una clase que representa un grupo de controles de formulario. Sirve para agrupar varios controles de formulario (como FormControl) en una estructura jerárquica. Es útil cuando se quiere manejar un conjunto de campos del formulario como una sola unidad.
  //Aquí, se agrupan los campos nombre, email, y password en un solo FormGroup, lo que permite trabajar con ellos como una entidad conjunta.

  login: FormGroup;
  loading = false;

  //FormBuilder es un servicio que facilita la creación de formularios. En lugar de crear manualmente los FormGroup y FormControl, FormBuilder proporciona una manera más sencilla y legible de construirlos.
  //Inyeccion de dependencias = constructor
  //En este caso, con FormBuilder se puede crear el formulario más rápidamente y de manera más limpia. Al usar FormBuilder, se reduce la verbosidad del código, ya que no es necesario instanciar explícitamente cada FormControl
  constructor(private fb: FormBuilder, private toastr: ToastrService,
     private router: Router) {
    this.login = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  log():void{
    console.log('login', this.login);
    const usuario: Usuario = {
      nombreUsuario: this.login.value.usuario,
      password: this.login.value.password
    }
    this.loading = true
    setTimeout(()=>{
      if(usuario.nombreUsuario === 'xiomy' && usuario.password ==='xiomy123'){
        this.router.navigate(['/dashboard'])
      } else {
        this.toastr.error('Usuario o contraseña incorrecta', 'Error');
        this.login.reset();
      }
      this.loading = false
    }, 3000)
  }

}
