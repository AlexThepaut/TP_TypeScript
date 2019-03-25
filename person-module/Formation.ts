import { Formateur } from './Formateur';
import { Stagiaire } from './Stagiaire';

export class Formation {
    constructor(public nom:string, public debut:Date, public fin:Date, public stagiaires:Stagiaire[], public formateurs:Formateur[]){

    }
}