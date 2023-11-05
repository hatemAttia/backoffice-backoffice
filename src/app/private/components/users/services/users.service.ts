import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../../context/DTO';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient ) { }

  getAllAdminUsers(): Observable<User[]>{
    return this._http.get<User[]>(environment.baseApi+'/users');
  }

  getUser(id:any): Observable<User>{
    return this._http.get<User>(environment.baseApi+`/users/${id}`);
  }

  getUsersbyRole(role:string): Observable<User[]>{
    return this._http.get<User[]>(environment.baseApi+`/users/${role}`);
  }

  creatUser(model:User):Observable<any>{
    console.log(model)
    return this._http.post(environment.baseApi+'/users',model);
  }
  updateUser(model:User, id :any):Observable<any>{
    console.log(model)
    return this._http.patch(environment.baseApi+`/users/${id}`,model);
  }

  deleteConference(id : number): Observable<any>{
    return this._http.delete(environment.baseApi+`/users/${id}`); 
  }
}
