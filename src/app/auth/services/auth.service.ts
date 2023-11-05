import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../context/DTOs';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient) { }

  register(model : Login){
    return this.http.post(environment.baseApi+'/users', model)
  }

  getByEmail(email : any): Observable<any>{
    return this.http.get(environment.baseApi+`/users/${email}`)
    
  }

  getUsers(){
    return  this.http.get(environment.baseApi+'/users')
  }

isLoggedIn(){
  return sessionStorage.getItem('userName');
}

getUserRole(){
  return sessionStorage.getItem('UserRole')!=null?sessionStorage.getItem('UserRole')?.toString():'';
}

}
