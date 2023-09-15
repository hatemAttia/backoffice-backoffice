import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../context/DTOs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient) { }

  login(model : Login){
    return this.http.post('http://localhost:3000/users', model)
  }

  getUsers(){
    return  this.http.get(environment.baseApi+'users')
  }
}
