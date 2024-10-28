import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
//fORMbUILDER PARA HACER LAS VALIDACIONES
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.register = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['']
    }, {validator: this.checkPassword}
  );
  }

  registrarUsuario():void {
    console.log('registro de usuario', this.register)
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls['password'].value;
    const confirmPass = group.controls['confirmPassword'].value
    return pass === confirmPass ? null : {notSame: true}
  }

}
    