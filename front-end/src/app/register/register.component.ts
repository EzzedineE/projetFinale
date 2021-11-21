import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  selectedFile: File;
  imgURL: any;
  user = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      Validators.required,
    ]),
    password: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    role: new FormControl('user'),
  });
  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    var reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }
  // onUpload(image: Image) {
  //   this.services.onUpload(image).subscribe(
  //     (res) => {
  //       console.log(res);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }
  enregistrement() {
    if (this.user.valid) {
      const newUser = this.user.value;
      newUser.role = 'user';
      newUser.resultats = [];
      newUser.moyenne = 0;
      const uploadData = new FormData();
      uploadData.append('nom', newUser.nom);
      uploadData.append('prenom', newUser.prenom);
      uploadData.append('email', newUser.email);
      uploadData.append('password', newUser.password);
      uploadData.append('address', newUser.address);
      uploadData.append('role', newUser.role);
      uploadData.append('image', this.selectedFile);
      console.log(uploadData);

      this.services.register(uploadData).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['login']);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  constructor(
    private services: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {}
}
