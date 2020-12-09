import { Component, OnChanges, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/interfaces/movie';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {

  movies:Movie[];
  constructor(private ms : MoviesService) {
    this.movies = ms.getMovies$();
  }

  ngOnInit(): void {
  }
  ngOnChanges(): void
  {
    console.log("OnChanges D:");
    this.movies = this.ms.getMovies$();
  }

}
