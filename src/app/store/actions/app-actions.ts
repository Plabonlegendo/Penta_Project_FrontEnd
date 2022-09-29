import { createAction, props } from "@ngrx/store";
import { RequestResponse } from "src/app/models/app-dto";


export const SaveLoginRequest = createAction("SUA-SaveLoginRequest", props<{ loginRequestObj: any }>());
export const SaveLoginSuccess = createAction("SUA-SaveLoginSuccess", props<{ requestResponse: RequestResponse }>());
export const SaveLoginFailed = createAction("SUA-SaveLoginFailed", props<{ error: any }>());

