import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conference } from '../../context/DTO';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConferencesService {

  constructor(private _http:HttpClient) { }


  getAllConferences(): Observable<any>{
    return this._http.get(environment.baseApi+'/conferences');
    
  }


  getConferenceDetail(id : any): Observable<any>{ 
    return this._http.get(
      environment.baseApi+`/conferences/${id}`
    );
  }


  creatConference(model : any): Observable<any>{
    console.log(model)
  return this._http.post(environment.baseApi+'/conferences',model);
  }

  updateConference(id: number, model : any): Observable<any>{
    console.log(model)
  return this._http.put(environment.baseApi+`/conferences/${id}`,model);
  }

  deleteConference(id : number): Observable<any>{
    return this._http.delete(environment.baseApi+`/conferences/${id}`); 
  }

  
}


