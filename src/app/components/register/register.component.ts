import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { SnackBarService } from 'src/app/services/notification-service';
import * as appActions from 'src/app/store/actions/app-actions';
import { getIsRegisterSuccessful } from 'src/app/store/selectors/app-selectors';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;

  count: number = 0;

  Roles: any = ['Teacher', 'Student'];

  Departments: any = ['Computer Science And Engineering', 'Electrical And Electronics Engineering', 'Microbiology', 'Bio-Chemistry', 'Pharmacy', 'Applied Statistics'];
  
  constructor(private fb: FormBuilder, private store: Store, private notificationService: SnackBarService){}

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      email: ["",
        [
          RxwebValidators.required({ message: 'Email is Required' }),
          RxwebValidators.email({ message: "Email format is Incorrect"})
        ]     
      ], 
      username: ["", RxwebValidators.required({ message: "User Name is Required" })],
      phoneNo: ["", 
        [
          RxwebValidators.required({ message: 'Mobile No is required' }),
          RxwebValidators.pattern({ expression: { 'onlyDigit': /^(\+?88|0088)?01[3-9]\d{8}$/ }, message: 'Enter a valid Mobile Number' })
        ],
      ],
      departmentName: ["", RxwebValidators.required({ message: "Department Name is Required" })],
      role: ["", RxwebValidators.required({ message: "Role is Required" })],
      password: ["", 
        [
          RxwebValidators.required({message: "Password is Required"}),
          RxwebValidators.minLength({value: 6, message: "Password needs to be of length 6"})
        ],
      ],
      confirmPassword: ['',
        [
          RxwebValidators.required({ message: 'Confirm password is required' }),
          RxwebValidators.compare({ message: "Password does not match with Confirm password", fieldName: 'password' })
        ]
      ]
    });
  }

  get formControl(){
    return this.formRegister.controls;
  }

  @ViewChild('form') form;
  reset(){
    this.form.resetForm();
  }

  register(){
    this.store.dispatch(appActions.SaveRegisterRequest({ registerRequestObj: this.formRegister.value }));
    this.store.select(getIsRegisterSuccessful).subscribe(data => {
      if(data.isDataLoading == false){
        if(data.isRegisterSuccessful == true){
          this.reset();
          this.notificationService.displayNotification("Registration Successfull", "dismiss");
        }else{
          this.notificationService.displayNotification("Registration Unsuccessfull", "dismiss");
        }
      }
    })
  }

}
