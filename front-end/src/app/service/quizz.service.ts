import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quizz } from '../models/quizz';
import { User } from '../models/userModel';

@Injectable({
  providedIn: 'root',
})
export class QuizzService {
  constructor(private http: HttpClient) {}
  addQuizz(quiz: Quizz) {
    return this.http.post('http://localhost:4000/api/quizz/', quiz);
  }
  add(quizz: Quizz) {
    const Quizz1 = JSON.parse(localStorage.getItem('quizz') || '[]');
    Quizz1.push(quizz);
    localStorage.setItem('quizz', JSON.stringify(Quizz1));
  }
  getquizz() {
    return JSON.parse(localStorage.getItem('quizz') || '[]');
  }
  getQuizz() {
    return this.http.get('http://localhost:4000/api/quizz/');
  }
}
