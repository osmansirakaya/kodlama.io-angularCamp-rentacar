import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/LoginModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "http://localhost:3000/users/";
  constructor(private httpClient:HttpClient) { }


    checkUser(loginModel:LoginModel):Observable<LoginModel>{
      return this.httpClient.get<LoginModel>('http://localhost:3000/users/?eMail='+loginModel.eMail+'&password='+loginModel.password)
    }
    addUser(val:LoginModel):Observable<LoginModel>{
      return this.httpClient.post<LoginModel>(this.apiUrl,val)
    }
  }

