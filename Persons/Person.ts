export enum Genre {
    Homme,
    Femme
}

export enum Religion {
    Buddhism,
    Judaism,
    Islam,
    Catholicism,
    Atheist
}

export class Boisson {
    constructor(public nom: string, public isAlcool: boolean, public isBio: boolean) {
    }
}

export class Person {
    constructor(public nom: string, public prenom: string, public genre: Genre, protected religion?: Religion, public boisson?: Boisson) {

    }

    boire(){
        if(this.boisson){
            return `${this.boisson.nom} => alcool: ${this.boisson.isAlcool}, Bio: ${this.boisson.isBio}`;
        }else{
            return 'Ne boit pas';
        }
    }

    toString(){
        return `${this.prenom} ${this.nom}`;
    }
}

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

export class Certification{
    constructor(public nom:string, public anneeAcquisition:Date){

    }
}

export class Stagiaire extends Person{
    constructor(public nom: string, public prenom: string, public genre: Genre, public certification: Certification[], protected religion?: Religion, public boisson?: Boisson){
        super(nom, prenom, genre, religion, boisson);
    }
}

export class Formation {
    constructor(public nom:string, public debut:Date, public fin:Date, public stagiaires:Stagiaire[], public formateurs:Formateur[]){

    }
}

