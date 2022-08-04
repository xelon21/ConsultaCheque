import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
  
  .bobi{
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    background-color: #f5f5f5;
  }
  .margin {
    padding: 40px;
  }

  .bobi2{
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;    
  }

  .login{
    margin: 18% auto;    
  }

  `
  ]
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private router: Router) { }

  formLogin: FormGroup = this.fb.group({
    usuario: ['', [ Validators.minLength(2), Validators.required ]],
    password: ['', [ Validators.minLength(2), Validators.required ]],
  })

  ngOnInit(): void {
  }

  login(){

    if(this.formLogin.valid){
      this.router.navigateByUrl('/home/consulta');
    }

  }

}
