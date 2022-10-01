import { createReducer, on, State } from "@ngrx/store";
import { BaseData } from "src/app/helpers/base-data";
import { PersonDto } from "src/app/models/app-dto";
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
    isLoginDataLoading: boolean,
    isAdminPersonListLoading: boolean,
    AdminPersonList: PersonDto[],
    isForgetPasswordSuccess: boolean,
}

export const initialApplicationState: applicationState = {
    isLoginSuccessful: false,
    loginSuccessObj: null,
    isRegisterSuccessful: false,
    registerSuccessObj: null,
    isRegisterDataLoading: false,
    isLoginDataLoading: false,
    isAdminPersonListLoading: false,
    AdminPersonList: [],
    isForgetPasswordSuccess: false,
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

    //Admin Person List Get
    on(appActions.GetPersonListForAdminRequest, (state) => ({
        ...state,
        isAdminPersonListLoading: true
    })),

    on(appActions.GetPersonListForAdminSuccess, (state, { requestResponse }) => ({
        ...state,
        isAdminPersonListLoading: false,
        AdminPersonList: requestResponse.data
    })),

    on(appActions.GetPersonListForAdminFailed, (state, { error }) => ({
        ...state,
        isAdminPersonListLoading: false
    })),

    //Forget Password
    on(appActions.SaveForgetPasswordRequest, (state) => ({
        ...state,
        isForgetPasswordSuccess: false
    })),
    on(appActions.SaveForgetPasswordSuccess, (state, { requestResponse }) => ({
        ...state,
        isForgetPasswordSuccess: true,
    })),
    on(appActions.SaveForgetPasswordFailed, (state, { error }) => ({
        ...state,
        isForgetPasswordSuccess: false
    }))

)