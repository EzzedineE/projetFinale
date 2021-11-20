import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quizz } from '../models/quizz';
import { Resultat } from '../models/resultat.model';
import { User } from '../models/userModel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  /////////////////////////////////////////////////////////////////////////////////////
  getUserBd() {
    return this.http.get('http://localhost:4000/api/user/getUser');
  }
  deletegetUserBd(id: string) {
    return this.http.delete(`http://localhost:4000/api/user/${id}`);
  }
  getOneUserBd(id: string) {
    return this.http.get(`http://localhost:4000/api/user/${id}`);
  }
  modifyUserBd(id: string, user: User) {
    return this.http.put(`http://localhost:4000/api/user/${id}`, user);
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // save utilisateur
  setuser(user: User) {
    localStorage.setItem('userConecter', JSON.stringify(user));
  }
  // avoir utilisateur
  getuser() {
    return JSON.parse(localStorage.getItem('userConecter') || 'null');
  }
  getusers() {
    return JSON.parse(localStorage.getItem('utilisateurs') || 'null');
  }
  // deconection
  logout() {
    localStorage.removeItem('userConecter');
  }
  verifQuizExist(resultats: Resultat[], quiz: Quizz): boolean {
    for (let i = 0; i < resultats.length; i++) {
      const resultat = resultats[i];
      if (resultat.quiz.titre == quiz.titre) {
        return true;
      }
    }
    return false;
  }
  ajoutResultat(email: string, resultat: Resultat): boolean {
    const users = JSON.parse(localStorage.getItem('utilisateurs') || '[]');
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == email) {
        if (this.verifQuizExist(users[i].resultats, resultat.quiz)) {
          return false;
        }
        const resultats = users[i].resultats;
        let moy = 0;
        for (let j = 0; j < resultats.length; j++) {
          moy += resultats[j].note;
        }
        moy /= resultats.length;
        users[i].moyenne = moy;
        users[i].resultats.push(resultat);
        break;
      }
    }
    localStorage.setItem('utilisateurs', JSON.stringify(users));
    return true;
  }
}
