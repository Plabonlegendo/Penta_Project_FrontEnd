import { createAction, props } from "@ngrx/store";
import { RequestResponse } from "src/app/models/app-dto";


export const SaveLoginRequest = createAction("SUA-SaveLoginRequest", props<{ loginRequestObj: any }>());
export const SaveLoginSuccess = createAction("SUA-SaveLoginSuccess", props<{ requestResponse: RequestResponse }>());
export const SaveLoginFailed = createAction("SUA-SaveLoginFailed", props<{ error: any }>());

export const SaveRegisterRequest = createAction("SUA-SaveRegisterRequest", props<{ registerRequestObj: any }>());
export const SaveRegisterSuccess = createAction("SUA-SaveRegisterSuccess", props<{ requestResponse: RequestResponse }>());
export const SaveRegisterFailed = createAction("SUA-SaveRegisterFailed", props<{ error: any }>());

export const GetPersonListForAdminRequest = createAction("SUA-GetPersonListForAdminRequest");
export const GetPersonListForAdminSuccess = createAction("SUA-GetPersonListForAdminSuccess", props<{ requestResponse: RequestResponse }>());
export const GetPersonListForAdminFailed = createAction("SUA-GetPersonListForAdminFailed", props<{ error: any }>());

export const SaveForgetPasswordRequest = createAction("SUA-SaveForgetPasswordRequest", props<{ forgetPasswordObj: any }>());
export const SaveForgetPasswordSuccess = createAction("SUA-SaveForgetPasswordSuccess", props<{ requestResponse: RequestResponse }>());
export const SaveForgetPasswordFailed = createAction("SUA-SaveForgetPasswordFailed", props<{ error: any }>());

export const SaveProcessForgetPasswordRequest = createAction("SUA-SaveProcessForgetPasswordRequest", props<{ processPasswordObj: any }>());
export const SaveProcessForgetPasswordSuccess = createAction("SUA-SaveForgetPasswordSuccess", props<{ requestResponse: RequestResponse }>());
export const SaveProcessForgetPasswordFailed = createAction("SUA-SaveForgetPasswordFailed", props<{ error: any }>());



