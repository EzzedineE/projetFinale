import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../service/user.service';
import { User } from '../models/userModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  conectedUser = new FormGroup({
    email1: new FormControl('ezzedine.elechi@gmail.com'),
    password1: new FormControl('123456789'),
  });

  // s'identifier
  identifier() {
    this.services
      .login(this.conectedUser.value.email1, this.conectedUser.value.password1)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.sevicesStorge.setuser(res.user);
        },
        (err) => {
          console.log(err);
        }
      );
    this.router.navigate(['']);
  }

  constructor(
    private services: AuthService,
    private sevicesStorge: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
}
