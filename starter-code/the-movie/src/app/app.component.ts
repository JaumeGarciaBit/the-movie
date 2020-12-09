import { Component, OnInit } from '@angular/core';
import { MoviesService } from './shared/services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'the-movie';

  constructor(private ms :MoviesService)
  {
  }


}
