import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.loginForm;
  }

  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  onSubmit() {
    this.http.post(environment.apiUrl+'login', this.loginForm.value).subscribe(response=>{
      console.log(response);
      
      this.router.navigate(['/dashboard'])

    })
  }
}
