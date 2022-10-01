import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RequestResponse } from "../models/app-dto";
import { ServiceGatewayUrl } from "../utils/service-url";


@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private http: HttpClient){ }

    loginPerson(loginObj: any): Observable<RequestResponse> {
        return this.http.post<RequestResponse>(ServiceGatewayUrl.ApiBaseUrl + "auth/signin/person", loginObj);
    }

    registerPerson(registerObj: any): Observable<RequestResponse> {
        return this.http.post<RequestResponse>(ServiceGatewayUrl.ApiBaseUrl + "auth/signup/person", registerObj);
    }

    getPersonListForAdmin():Observable<RequestResponse> {
        return this.http.get<RequestResponse>(ServiceGatewayUrl.ApiBaseUrl + "resources/admin");
    }
}