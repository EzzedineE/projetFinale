import { Quizz } from './quizz';

export class Resultat {
  quiz: Quizz;
  note: number;

  constructor(quiz: Quizz, note: number) {
    (this.quiz = quiz), (this.note = note);
  }
}
