import { Resultat } from './resultat.model';

export class User {
  _id: string;
  nom: string;
  prenom: string;
  email: string;
  password: string;
  address: string;
  role: string;
  resultats: Resultat[];
  moyenne: number;

  constructor(
    _id: string = '',
    nom: string = '',
    prenom: string = '',
    email: string = '',
    password: string = '',
    address: string = '',
    role: string = 'user',
    resultats: Resultat[] = [],
    moyenne: number = 0
  ) {
    (this.nom = nom),
      (this._id = _id),
      (this.prenom = prenom),
      (this.email = email),
      (this.password = password),
      (this.address = address),
      (this.role = role),
      (this.resultats = resultats),
      (this.moyenne = moyenne);
  }
}
export class Image {
  image: string;

  constructor(image: string = '') {
    this.image = image;
  }
}
