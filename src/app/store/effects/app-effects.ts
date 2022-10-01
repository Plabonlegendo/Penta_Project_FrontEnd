import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, mergeMap, of } from "rxjs";
import { AppService } from "src/app/services/app-services";
import * as appActions from "src/app/store/actions/app-actions";


@Injectable()
export class appEffects {
    constructor(private actions$: Actions, private appService: AppService){}

    SaveLogin$ = createEffect(() => 
        this.actions$.pipe(
            ofType(appActions.SaveLoginRequest),
            exhaustMap(({ loginRequestObj }) =>
                this.appService.loginPerson(loginRequestObj).pipe(
                    map((requestResponse) => appActions.SaveLoginSuccess({ requestResponse })),
                    catchError((error) => of(appActions.SaveLoginFailed({ error })))
                )
            )
        )
    );

    SaveRegister$ = createEffect(() => 
    this.actions$.pipe(
        ofType(appActions.SaveRegisterRequest),
        exhaustMap(({ registerRequestObj }) =>
            this.appService.registerPerson(registerRequestObj).pipe(
                map((requestResponse) => appActions.SaveRegisterSuccess({ requestResponse })),
                catchError((error) => of(appActions.SaveRegisterFailed({ error })))
                )
            )
        )
    );

    GetPersonList$ = createEffect(() => 
        this.actions$.pipe(
            ofType(appActions.GetPersonListForAdminRequest),
            mergeMap(({  }) =>
                this.appService.getPersonListForAdmin().pipe(
                    map((requestResponse) => appActions.GetPersonListForAdminSuccess({ requestResponse })),
                    catchError((error) => of(appActions.GetPersonListForAdminFailed({ error })))
                    )
                )
            )
    );

    SaveForgetPassword$ = createEffect(() => 
    this.actions$.pipe(
        ofType(appActions.SaveForgetPasswordRequest),
        exhaustMap(({ forgetPasswordObj }) =>
            this.appService.saveForgetPassword(forgetPasswordObj).pipe(
                map((requestResponse) => appActions.SaveForgetPasswordSuccess({ requestResponse })),
                catchError((error) => of(appActions.SaveForgetPasswordFailed({ error })))
            )
        )
    )
    )
}