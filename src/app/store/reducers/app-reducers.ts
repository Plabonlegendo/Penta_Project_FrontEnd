import { createReducer, on } from "@ngrx/store";
import { BaseData } from "src/app/helpers/base-data";
import * as appActions from 'src/app/store/actions/app-actions';

export const applicationFeatureKey = "applicationFeatureKey";

export interface applicationStoreState {
    [applicationFeatureKey]: applicationState
}

export interface applicationState {
    isLoginSuccessful: boolean
    loginSuccessObj: any,
    isRegisterDataLoading: boolean,
    isRegisterSuccessful: boolean,
    registerSuccessObj: any,
    isLoginDataLoading: boolean
}

export const initialApplicationState: applicationState = {
    isLoginSuccessful: false,
    loginSuccessObj: null,
    isRegisterSuccessful: false,
    registerSuccessObj: null,
    isRegisterDataLoading: false,
    isLoginDataLoading: false,
}

export const applicationReducer = createReducer(
    initialApplicationState,

    //Login Request
    on(appActions.SaveLoginRequest, (state) => ({
        ...state,
        isLoginDataLoading: true,
        isLoginSuccessful: false,
    })),

    //Login Success
    on(appActions.SaveLoginSuccess, (state, { requestResponse }) => {
        let token: any = requestResponse.data.accessToken;
        localStorage.setItem(BaseData.LocalStorageKey.Auth, JSON.stringify(token));
        
        return {
            ...state,
            loginSuccessObj: requestResponse.data,
            isLoginDataLoading: false,
            isLoginSuccessful: true
        }      
    }),

    //Login Failed
    on(appActions.SaveLoginFailed, (state, { error }) => ({
        ...state,
        isLoginDataLoading: false,
        isLoginSuccessful: false
    })),

    //Register Request
    on(appActions.SaveRegisterRequest, (state) => ({
        ...state,
        isRegisterDataLoading: true,
        isRegisterSuccessful: false,
    })),

    //Register Success
    on(appActions.SaveRegisterSuccess, (state, { requestResponse }) => ({
        ...state,
        isRegisterDataLoading: false,
        isRegisterSuccessful: true
    })),

    //Register Failed
    on(appActions.SaveRegisterFailed, (state, { error }) => ({
        ...state,
        isRegisterDataLoading: false,
        isRegisterSuccessful: false
    })),


)