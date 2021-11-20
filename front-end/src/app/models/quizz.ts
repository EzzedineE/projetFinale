export class Quizz {
  titre: string;
  questions: Question[];
  answered: boolean;
  constructor(
    titre: string = '',
    questions: Question[] = [new Question()],
    answered: boolean = false
  ) {
    this.titre = titre;
    this.questions = questions;
    this.answered = answered;
  }
}
// quiz[k].titre
// let quest = this.quiz[k].questions;
// for (let i = 0; i < quest.length; i++) {
//   const oneQuest = quest[i];
//   for (let j = 0; j < oneQuest.reponses.length; j++) {
//     const oneReponse = oneQuest.reponses[j];
//   }
// }
export class Question {
  question: string;
  bonnereponse: number;
  userReponse: number;
  reponses: string[];

  constructor(
    question: string = '',
    bonnereponse: number = -1,
    reponses: string[] = ['']
  ) {
    this.question = question;
    this.bonnereponse = bonnereponse;
    this.reponses = reponses;
  }
}
