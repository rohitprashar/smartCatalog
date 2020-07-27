import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }


  getWelcomeMessage()
  {
    console.log("executed service")
  }
}
