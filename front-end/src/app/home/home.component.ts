import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Quizz } from '../models/quizz';
import { Resultat } from '../models/resultat.model';
import { User } from '../models/userModel';
import { QuizzService } from '../service/quizz.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  quizz: Quizz[];
  rechercher: string = '';
  numQuizz: number;
  userconected: User[];
  charger: boolean;
  reponsevalider(k: number, i: number, j: number) {
    this.quizz[k].questions[i].userReponse = j;
  }

  valid(k: number) {
    let questions = this.quizz[k].questions;
    let note = 0;

    for (let i = 0; i < questions.length; i++) {
      if (questions[i].userReponse == undefined) {
        this.toastr.error(`valider une reponse pour la question : ${i + 1}`);
        return;
      } else if (questions[i].userReponse == questions[i].bonnereponse) {
        note += 1;
      }
    }
    this.quizz[k].answered = true;
    this.numQuizz += 1;
    const resultat = new Resultat(
      this.quizz[k],
      (note / questions.length) * 100
    );
    const email = this.servise.getuser().email;
    if (this.servise.ajoutResultat(email, resultat)) {
      this.toastr.success(`Resultat sauvgarder ${note} / ${questions.length}`);
    } else {
      this.toastr.error(`vouz avez deja passe cette quizz`);
    }
  }

  constructor(
    private servise: UserService,
    private quizzservice: QuizzService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.charger = false;
    this.quizzservice.getQuizz().subscribe(
      (res: any) => {
        this.quizz = res;
        this.charger = true;
      },
      (err) => {
        console.log(err);
      }
    );
    // this.quizz = this.quizzservice.getquizz();
    this.numQuizz = 0;
  }

  checkChanges(e: any) {
    console.log(e);

    if (e.target.checked) {
      console.log('checked true');
    } else {
      console.log('checked false');
    }
  }
}
