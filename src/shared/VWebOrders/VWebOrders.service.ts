import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { VWebOrders } from "src/models/VWebOrders.model";

@Injectable({
    providedIn: 'root'
})
export class VWebOrdersService {

    constructor(private http: HttpClient
    ) { }

    uri_api = 'http://localhost:8010/api/vweborders';
    getVWebOrders(page: number, limit: number): Observable<any> {
        return this.http.get<VWebOrders[]>(this.uri_api + "?page=" + page + "&limit=" + limit)
      }

    
}