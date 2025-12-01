import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'archive-page',
  templateUrl: './archive-page.component.html',
  styleUrls: ['./archive-page.component.css']
})
export class ArchivePageComponent implements OnInit {

  year: number;
  month: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.year = +params.get('year');
        this.month = +params.get('month');
      }
    );
  }

  submit(){
    this.router.navigate(['/']);
  }

}
