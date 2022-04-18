import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Demo } from './demo.model';

@Injectable()
export class DemoService {

  private _apiLink: string;

  constructor(private _http: HttpClient) { 
    this._apiLink = environment.baseURL;
  }

  public getDetails(): Observable<Demo[]>{
  
    return this._http.get<Demo[]>(`${this._apiLink}/department`);
  }

  public addDetails(data: Demo): Observable<Demo>{
    return this._http.post<Demo>(`${this._apiLink}/department`, data);
  }

}
