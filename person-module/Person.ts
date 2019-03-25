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
            return `${this.boisson.nom} => alcool: ${this.boisson.isAlcool}, bio: ${this.boisson.isBio}`;
        }else{
            return 'Ne boit pas';
        }
    }

    toString(){
        return `${this.prenom} ${this.nom}`;
    }
}