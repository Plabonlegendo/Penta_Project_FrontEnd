import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import * as appActions from 'src/app/store/actions/app-actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ["",
        [
          RxwebValidators.required({message: 'Email is Required' }),
          RxwebValidators.email({ message: "Email format is Incorrect"})
        ]     
      ],
      password: ["", RxwebValidators.required({ message: 'Password is Required'})]
    })

  }

  get formControl() {
    return this.formLogin.controls;
  }

  login() {
    console.log(this.formLogin.value);
    this.store.dispatch(appActions.SaveLoginRequest({ loginRequestObj: this.formLogin.value }));
  }
}
