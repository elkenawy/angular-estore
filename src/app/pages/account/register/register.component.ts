import { AuthService } from './../../../shared/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

@Input() loader: boolean = false;
error: string = null;



  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

onSubmit(form: NgForm) {
    if (!form.valid){
      return;
    }
    const email = form.value.email;
    const password1 = form.value.password1;
    const password2 = form.value.password2;
 
    console.log(email);
    console.log(password1);
    console.log(password2);
 
   
    this.loader = true;
    this.authService.signup(email, password1, password2).subscribe(
      resData => {
        console.log(resData);
        this.loader = false;
        this.router.navigate(['/']);
      },
      errorMessage => {
       console.log(errorMessage);
       this.error = errorMessage;
       this.loader = false;
        
      }
    );
    form.reset()
  }

}

