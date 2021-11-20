import { Component, OnInit } from '@angular/core';
import { User } from '../models/userModel';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css'],
})
export class GestionUtilisateurComponent implements OnInit {
  Users: User[];

  constructor(
    private services: AuthService,
    private servicesUser: UserService
  ) {}

  ngOnInit(): void {
    this.servicesUser.getUserBd().subscribe(
      (res: any) => {
        this.Users = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  supprimer(id: string) {
    if (confirm('voulez vous supprimer')) {
      this.servicesUser.deletegetUserBd(id).subscribe(
        (res: any) => {
          console.log(res);
          this.Users = this.Users.filter((user) => user._id != id);
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
  }
}
