import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambhiar-password',
  templateUrl: './cambhiar-password.component.html',
  styleUrl: './cambhiar-password.component.css'
})
export class CambhiarPasswordComponent {
  cambiarPassword: FormGroup;

  constructor(private fb: FormBuilder){
    this.cambiarPassword = this.fb.group({
      passwordAnterior: ['', Validators.required],
      nuevaPassword: ['', [Validators.required, Validators.minLength(4)]],
      confirPassword: ['']
    }, {validator: this.checkPassword});
  }

  ngOnInit(): void{

  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls['nuevaPassword'].value;
    const confirmPass = group.controls['confirPassword'].value
    return pass === confirmPass ? null : {notSame: true}
  }

  guardarPasword(): void{
    console.log(this.cambiarPassword);
  }
}
