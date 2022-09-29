import { createReducer, on } from "@ngrx/store";
import { BaseData } from "src/app/helpers/base-data";
import * as appActions from 'src/app/store/actions/app-actions';

export const applicationFeatureKey = "applicationFeatureKey";

export interface applicationStoreState {
    [applicationFeatureKey]: applicationState
}

export interface applicationState {
    isLoginSuccessful: boolean
    loginSuccessObj: any
}

export const initialApplicationState: applicationState = {
    isLoginSuccessful: false,
    loginSuccessObj: null
}

export const applicationReducer = createReducer(
    initialApplicationState,

    //Login Request
    on(appActions.SaveLoginRequest, (state) => ({
        ...state,
        isLoginSuccessful: false
    })),

    //Login Success
    on(appActions.SaveLoginSuccess, (state, { requestResponse}) => {
        let token: any = requestResponse.data.accessToken;
        localStorage.setItem(BaseData.LocalStorageKey.Auth, JSON.stringify(token));
        
        return {
            ...state,
            loginSuccessObj: requestResponse.data
        }      
    }),

    //Login Failed
    on(appActions.SaveLoginFailed, (state, { error }) => ({
        ...state,
        isLoginSuccessful: false
    })),
)