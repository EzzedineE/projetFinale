import { Component, OnInit } from '@angular/core';
import { User } from '../models/userModel';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css'],
})
export class ResultatComponent implements OnInit {
  users: User[];
  titre: string = 'quizz';
  rechercher: string = '';
  constructor(private services: UserService) {}

  ngOnInit(): void {
    this.users = this.services.getusers();
  }
}
