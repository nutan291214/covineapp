import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const API = environment.APIURL;
@Injectable({
    providedIn: 'root'
})
export class BookingAppService {
    constructor(private http: HttpClient) {
    }

    public getLocationByStates(): Observable<any>{
       return this.http.get(API);

    }
}
