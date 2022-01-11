import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.scss']
})
export class LoginCompComponent implements OnInit {

  username : string | undefined = '';
  password: string | undefined = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    //alert(this.username+" "+this.password);
    console.log(this.router);
    this.router?.navigate(['/main']);
  }

  cancel() {
    this.username = "";
    this.password = "";
  }

}
