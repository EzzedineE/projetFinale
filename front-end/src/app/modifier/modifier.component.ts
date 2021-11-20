import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/userModel';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css'],
})
export class ModifierComponent implements OnInit {
  id: string;
  user: User;
  userForm: FormGroup;

  role(e: any) {
    if (e.target.checked) {
      this.user.role = 'admin';
    } else {
      this.user.role = 'user';
    }
  }

  save() {
    // const verif = this.userForm.valid;
    // if (verif) {
    const saveUser = this.userForm.value;
    saveUser.role = this.user.role;
    saveUser.resultats = [];
    saveUser.moyenne = 0;
    if (this.user._id) {
      if (this.userForm.controls.password.value === '') {
        saveUser.password = this.user.password;
      }
      this.services.modifyUserBd(this.user._id, saveUser).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/gestion']);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.servicesAuth.register(saveUser).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/gestion']);
        },
        (err) => {
          console.log(err);
          this.toastr.error('E-mail Existant', 'error');
        }
      );
    }
  }

  constructor(
    private services: UserService,
    private servicesAuth: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.user = new User();
    this.userForm = new FormGroup({
      nom: new FormControl(this.user.nom, [Validators.required]),
      prenom: new FormControl(this.user.prenom, [Validators.required]),
      email: new FormControl(this.user.email, [
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        Validators.required,
      ]),
      password: new FormControl('', [Validators.required]),
      address: new FormControl(this.user.address, [Validators.required]),
    });
    if (this.id) {
      this.services.getOneUserBd(this.id).subscribe(
        (res: any) => {
          this.user = res;
          this.userForm.patchValue(this.user);
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
  }
}
