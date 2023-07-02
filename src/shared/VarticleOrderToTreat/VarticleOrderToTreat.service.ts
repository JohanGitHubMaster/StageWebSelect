import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { VOrderToTreat } from "src/models/VOrderToTreat.model";

@Injectable({
    providedIn: 'root'
})
export class VOrderToTreatService {

    constructor(private http: HttpClient
    ) { }

    uri_api = 'http://localhost:8010/api/vOrderToTreat';
    uri_test = 'http://localhost:8010/api/vOrderToTreatLimit';

    getVOrderToTreat(page: number, limit: number): Observable<any> {
        return this.http.get<VOrderToTreat[]>(this.uri_test + "?page=" + page + "&limit=" + limit)
        
        // return this.http.get<VOrderToTreat[]>(this.uri_api + "?page=" + page + "&limit=" + limit)
      }
}