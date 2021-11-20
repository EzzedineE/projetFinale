import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Quizz } from '../models/quizz';
import { QuizzService } from '../service/quizz.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css'],
})
export class QuizzComponent implements OnInit {
  quizz: FormGroup;
  questions2: FormGroup;
  verifbonnereponse() {
    for (let i = 0; i < this.questions().length; i++) {
      if (this.getOneQuestions(i).get('bonnereponse')?.value == null) {
        return false;
      }
    }
    return true;
  }

  add() {
    console.log(this.quizz);

    if (this.verifbonnereponse()) {
      this.quizzservice.addQuizz(this.quizz.value).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/']);
        },
        (err) => {
          console.log(err);
        }
      );
      // this.quizzservice.add(this.quizz.value);
    } else {
      this.toastr.error('entre la bonne reponse');
    }
  }

  questions() {
    return this.quizz.get('questions') as FormArray;
  }
  getOneQuestions(i: number) {
    return this.questions().at(i) as FormGroup;
  }
  addQuestion() {
    this.questions().push(
      new FormGroup({
        question: new FormControl('', [Validators.required]),
        bonnereponse: new FormControl(null),
        reponses: new FormArray([new FormControl('', [Validators.required])]),
      })
    );
  }
  reponses(i: number) {
    return this.getOneQuestions(i).get('reponses') as FormArray;
  }
  addReponse(i: number) {
    this.reponses(i).push(new FormControl('', [Validators.required]));
  }
  removeReponse(i: number, j: number) {
    this.reponses(i).removeAt(j);
  }
  bonneReponse(i: number, j: number) {
    this.getOneQuestions(i).patchValue({ bonnereponse: j });
  }
  getOneReponse(i: number, j: number) {
    return this.reponses(i).at(j).value;
  }
  constructor(
    private quizzservice: QuizzService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.quizz = new FormGroup({
      titre: new FormControl('', [Validators.required]),
      questions: new FormArray([
        new FormGroup({
          question: new FormControl('', [Validators.required]),
          bonnereponse: new FormControl(null),
          reponses: new FormArray([new FormControl('', [Validators.required])]),
        }),
      ]),
    });
  }
}
