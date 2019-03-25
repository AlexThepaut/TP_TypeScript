
import { Formateur, Connaissance, Genre, Certification, Stagiaire, Formation } from './Person';

let nico: Formateur = new Formateur(
    "Hodicq", "Nico",
    Genre.Homme,
    [new Connaissance("JS", 8), new Connaissance("Fortran", 1)]
);

let hubert: Formateur = new Formateur(
    "Gerard", "Hubert",
    Genre.Homme,
    [new Connaissance("Java", 1000), new Connaissance("JSTL", 3)]
);

let dorian: Stagiaire = new Stagiaire(
    "Mon Bonnamy",
    "Dorian",
    Genre.Homme,
    [new Certification("OCLA", new Date('2019-04-10')), new Certification("OCLA 2", new Date('2020-06-25'))]
);

let camille: Stagiaire = new Stagiaire(
    "Hautois",
    "Camille",
    Genre.Femme,
    [new Certification("OCLA", new Date('2019-04-10'))]
);

let DTAJavaForma = new Formation("Java Fullstack", new Date('2019-01-29'), new Date('2019-04-17'), [dorian, camille] ,[hubert, nico]);

console.log(DTAJavaForma);