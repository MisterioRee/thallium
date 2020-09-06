import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin() {

    this.authService.login(this.username, this.password)
      .subscribe(result => { 
        debugger;
        if (result.status == 200) {
          this.router.navigateByUrl('/home');
        } else {
          this.errorMessage = result.error.message;
        }

      }, error => {
        this.errorMessage = error.error.message;
      });

  }

}
