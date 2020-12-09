import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/shared/interfaces/movie';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movieID:number;
  currentMovie: Movie;

  constructor(private route : ActivatedRoute,
              private ms: MoviesService) {
    this.route.queryParams.subscribe(params => {
      this.movieID = params[0];
  });
  }

  ngOnInit(): void
  {
    this.currentMovie = this.ms.getMovie$(this.movieID);
    console.log(this.currentMovie);
  }

}
