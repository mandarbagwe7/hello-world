import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // If we are sure that this page will not have next or previous button and user has to go to some other page and come back.
    // let id = this.route.snapshot.paramMap.get('id');
    // console.log(id);

    this.route.paramMap.subscribe(
      params => {
        let id = +params.get('id');
        console.log(params);
      }
    );
  }

  submit(){
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest'}
    });
  }

}
