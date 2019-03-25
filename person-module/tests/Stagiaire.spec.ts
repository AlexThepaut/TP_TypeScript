import 'mocha';
import { expect } from 'chai';
import { Genre, Religion, Boisson } from '../Person';
import { Certification, Stagiaire } from '../Stagiaire';

describe('Stagiaire', () => {

    let kraken = new Boisson("The Kraken", true, true);
    let certifs = [new Certification("OCLA", new Date('2019-04-10')), new Certification("OCLA 2", new Date('2020-06-25'))]
    let person = new Stagiaire("nom", "prenom", Genre.Femme, certifs, Religion.Buddhism, kraken);

    it('toString', () => {
        expect(person.toString()).to.equal('prenom nom');
    });
    it('boire', () => {
        expect(person.boire()).to.equal('The Kraken => alcool: true, bio: true');
    });
    it('certification', () => {
        expect(person.certification[0].nom).to.equal('OCLA');
        expect(person.certification[1].nom).to.equal('OCLA 2');
    });
});