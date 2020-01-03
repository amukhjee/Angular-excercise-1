import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
 favLinks=["https://www.nytimes.com/2019/12/10/us/apprenticeships-white-collar-jobs.html", "https://fox2now.com/2019/07/10/codergirl-program-offers-training-new-job-opportunities-in-growing-it-market/"]

  constructor() { }

  ngOnInit() {
  }

}
