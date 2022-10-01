import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { SnackBarService } from 'src/app/services/notification-service';
import * as appActions from 'src/app/store/actions/app-actions';
import { getIsLoginSuccessful, getLoginSuccessObj } from 'src/app/store/selectors/app-selectors';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  loginSuccessObj: any;

  constructor(private fb: FormBuilder, private store: Store, private notificationService: SnackBarService, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ["",
        [
          RxwebValidators.required({ message: 'Email is Required' }),
          RxwebValidators.email({ message: "Email format is Incorrect"})
        ]     
      ],
      password: ["", RxwebValidators.required({ message: 'Password is Required'})]
    })

  }

  get formControl() {
    return this.formLogin.controls;
  }

  @ViewChild('form') form;
  reset() {
    this.form.resetForm();
  }

  login() {
    this.store.dispatch(appActions.SaveLoginRequest({ loginRequestObj: this.formLogin.value }));
    this.store.select(getLoginSuccessObj).subscribe(data => {
      if(data){
        this.loginSuccessObj = data;
        console.log(this.loginSuccessObj);
        this.goToDashboardPage(this.loginSuccessObj.roles);    
      }
    });


    this.store.select(getIsLoginSuccessful).subscribe(data => {
        if(data.isDataLoading == false){
          if(data.isLoginSuccessful == true){
            this.reset();
            this.notificationService.displayNotification("Login Successful", "dismiss");
          }else{
            this.notificationService.displayNotification("Login Unsuccessful", "dismiss");
          }
        }
    })

  }

  
  forget_password(){
    this.router.navigate(["forget_password"]);      
  }

  goToDashboardPage(role: string){
    console.log(role);
    if(role == 'Admin')
      this.router.navigate(['\admin']);
  }
}
