import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { BaseData } from 'src/app/helpers/base-data';
import { ServiceGatewayUrl } from 'src/app/utils/service-url';
import * as appActions from 'src/app/store/actions/app-actions';
import { getIsForgetPasswordSuccessful } from 'src/app/store/selectors/app-selectors';
import { SnackBarService } from 'src/app/services/notification-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  formForgetPassword: FormGroup;
  
  constructor(private store: Store, private fb: FormBuilder, private notificationService: SnackBarService, private router: Router) { }

  ngOnInit(): void {
    this.formForgetPassword = this.fb.group({
      email: ["",
        [
          RxwebValidators.required({ message: 'Email is Required' }),
          RxwebValidators.email({ message: "Email format is Incorrect"})
        ]     
      ],
    })

  }

  get formControl() {
    return this.formForgetPassword.controls;
  }

  @ViewChild('form') form;
  reset() {
    this.form.resetForm();
  }

  resetPassword(){
    let forgetPasswordObj = {
      email: this.formForgetPassword.value.email,
      link: ServiceGatewayUrl.FrontendServerBaseUrl
    }

    console.log(forgetPasswordObj);

    this.store.dispatch(appActions.SaveForgetPasswordRequest({ forgetPasswordObj: forgetPasswordObj}));
    this.store.select(getIsForgetPasswordSuccessful).subscribe(data => {
      if(data == true){
        this.router.navigate([`login`]);
        this.notificationService.displayNotification("Reset Password Email Sent", "dismiss");
      }else {
        this.notificationService.displayNotification("Email Not Sent. Please Try Again", "dismiss");
      }
    })
  }

}
