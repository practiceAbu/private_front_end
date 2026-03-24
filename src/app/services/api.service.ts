import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RebuttalData } from '../Model/rebuttalData';
import { DataImage } from '../Model/DataImage';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private _baseurl = 'http://localhost:8080/api/rebuttal';
  constructor(private http: HttpClient) { }

   getAllRequests = (username: string | undefined): Observable<RebuttalData[]> => {
    return this.http.get<RebuttalData[]>(`${this._baseurl}/All`);
  };
}
