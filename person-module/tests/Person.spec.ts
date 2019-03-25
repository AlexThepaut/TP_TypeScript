import * as Person from '../Person';
import 'mocha';
import { expect } from 'chai';

describe('Person', () => {

    let kraken = new Person.Boisson("The Kraken", true, true);
    let person = new Person.Person("nom", "prenom", Person.Genre.Femme, Person.Religion.Atheist, kraken);

    it('toString', () => {
        expect(person.toString()).to.equal('prenom nom');
    });
    it('boire', () => {
        expect(person.boire()).to.equal('The Kraken => alcool: true, bio: true');
    });
});