import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';
import * as data from '../data/movies.json';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private _movies : Movie[] = [];

  constructor()
  {

    for(let m of data.default[0].movies)
    {
      let l_movie:Movie =
      {
        id: m.id,
        title: m.title,
        poster: m.poster,
        synopsis: m.synopsis,
        genres: m.genres,
        year: m.year,
        director: m.director,
        actors: m.actors,
        hours: ["Friday - 19:15h","Saturday - 20:30h","Sunday - 21:45h"],
        room: data.default[0].movies.length+1-m.id
      };
      this._movies.push(l_movie);
    }
  }

  public getMovies$() : Movie[]
  {
    return this._movies;
  }
  public getMovie$(id:number) : Movie
  {
    return this._movies.find(m => m.id == id);
  }
}
