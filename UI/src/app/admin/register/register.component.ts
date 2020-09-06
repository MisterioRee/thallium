import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { UserModel } from '../model/user.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  public user = new UserModel();
  public errorMessage: string;
  isBusy: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onRegister() {
    this.isBusy = true;
    this.authService.register(this.user).subscribe(result => {
      this.isBusy = false;
      this.router.navigateByUrl('/login');
    }, error => {
      this.errorMessage = error.error.message;
      this.isBusy = false;
    });
  }

}
