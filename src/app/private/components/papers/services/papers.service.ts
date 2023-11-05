import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PapersService {

  constructor(private _http:HttpClient) { }


  getPapers(confId: any): Observable<any>{
   return this._http.get(
    environment.baseApi+`/papers/${confId}`
  );
}

saveConfPaper(formData : FormData): Observable<any>{
  return this._http.post(
    environment.baseApi+"/papers",formData);
}

}
