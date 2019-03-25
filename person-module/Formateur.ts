import { Genre, Religion, Person, Boisson } from './Person'

export class Connaissance {
    constructor(public nom:string, public nbrAnnees:number) {
        
    }
}

export class Formateur extends Person {
    constructor(public nom: string, public prenom: string, public genre: Genre, private connaissances: Connaissance[], protected religion?: Religion, public boisson?: Boisson){
        super(nom, prenom, genre, religion, boisson);
    }

    enseigner(){
        let nbrConnaissances = this.connaissances.length;
        let retour:string = `${this.nom} peut enseigner : `
        for (let i = 0; i < nbrConnaissances; i++) {
            if(this.connaissances[i].nbrAnnees > 2){
                retour += this.connaissances[i].nom;
            }
        }
        return retour;
    }
}