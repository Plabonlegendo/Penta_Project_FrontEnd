import { createFeatureSelector, createSelector } from "@ngrx/store";
import { applicationFeatureKey, applicationState } from "../reducers/app-reducers";

export const selectAppState = createFeatureSelector<applicationState>(
    applicationFeatureKey
)

export const getLoginSuccessObj = createSelector(
    selectAppState,
    (state) => state.loginSuccessObj
);

export const getIsLoginSuccessful = createSelector(
    selectAppState,
    (state) => ({
        isDataLoading: state.isLoginDataLoading,
        isLoginSuccessful: state.isLoginSuccessful
    })
);

export const getIsRegisterSuccessful = createSelector(
    selectAppState,
    (state) => ({
        isDataLoading: state.isRegisterDataLoading,
        isRegisterSuccessful: state.isRegisterSuccessful
    })
);

export const getPersonListForAdmin = createSelector(
    selectAppState,
    (state) => state.AdminPersonList
);