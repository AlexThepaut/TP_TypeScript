import { Genre, Religion, Boisson, Person } from './Person'

export class Certification{
    constructor(public nom:string, public anneeAcquisition:Date){

    }
}

export class Stagiaire extends Person{
    constructor(public nom: string, public prenom: string, public genre: Genre, public certification: Certification[], protected religion?: Religion, public boisson?: Boisson){
        super(nom, prenom, genre, religion, boisson);
    }
}