import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";
import { StoreModule } from '@ngrx/store';

/*Store Component*/
import { applicationFeatureKey, applicationReducer } from './store/reducers/app-reducers';
import { appEffects } from './store/effects/app-effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AdminPageComponent } from './components/admin/admin-page/admin-page.component';
import { AdminPersonsListComponent } from './components/admin/admin-persons-list/admin-persons-list.component';
import { HttpRequestInterceptor } from './helpers/http-interceptor';

import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { ForgetPasswordComponent } from './components/password-reset/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/password-reset/reset-password/reset-password.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminPageComponent,
    AdminPersonsListComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatSnackBarModule,
    StoreModule.forRoot({},{}),
    StoreModule.forFeature(applicationFeatureKey, applicationReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([
      appEffects
    ]),
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
