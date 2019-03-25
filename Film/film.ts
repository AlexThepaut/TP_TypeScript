import filmJson from './files/film.json';

class Trailer {
    constructor(public postdate: string, public url: string, public type: string, public exclusive: boolean, public hd: boolean) { }
}

class Film {
    constructor(public tilte: string, public releasedate: string, public studio: string, public poster: string,
        public location: string, public rating: string, public genre: string[], public directors: string, public actors: string[],
        public trailers: Trailer[], ) { }
}

console.log(filmJson);

let filmObject: Film[] = filmJson.map((f: any) => {
    return new Film(f.title, f.releasedate, f.studio,
        f.poster, f.location, f.rating,
        f.genre, f.directors, f.actors,
        f.trailers.map((t: any) => {
            return new Trailer(f.trailers.postdate, f.trailers.url, f.trailers.type, f.trailers.exclusive, f.trailers.hd)
        }));
})

console.log(filmObject[0].actors);