import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoginMode = true;
   loader: boolean = false;
   error: string = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
     
  }


onSubmit(form: NgForm) {
    if (!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    
    console.log(email);
    console.log(password);
   
   
    this.loader = true;
    this.authService.login(email, password).subscribe(
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
