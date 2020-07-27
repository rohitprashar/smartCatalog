import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceProvider } from './login/login.component';


@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor(private http : HttpClient) { }


  getWelcomeMessage()
  {
    console.log("hello service");
   return this.http.get<string>('http://localhost:8080/hello');

  }

  getCloudServices()
  {
    console.log("hello service");
   return this.http.get<ServiceProvider[]>('http://localhost:8080/all');

  }
}
