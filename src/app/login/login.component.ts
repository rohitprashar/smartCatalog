import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../welcome.service';

export class ServiceProvider {
  constructor(
    public serviceId:number,
    public cloudName: string,
    public serviceName: string,
    public specification: string,
    public reviews: string,
    public rating: string,
  ) { }
}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  welcomeMessage: string;
  serviceProviders: ServiceProvider[];
  constructor(private service: WelcomeService) { }

  ngOnInit(): void {
    this.service.getCloudServices().subscribe(
      response => {
        this.serviceProviders=response;

      }
    )
  }

  submit() {
    console.log(this.service.getWelcomeMessage());
    this.service.getWelcomeMessage().subscribe(
      response => console.log(response),
      error => this.handleErrorMessage(error)
    );
  }

  handleErrorMessage(error) {
    console.log(error);
    this.welcomeMessage = error.message
  }

}
