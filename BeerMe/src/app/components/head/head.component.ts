import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
// import { filter } from '@angular/rxjs/operators'

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor(private navegacion: Router) { }

  ngOnInit(): void {
    // this.navegacion.events
    //   .pipe(filter(event) => event instanceof NavigationStart)
    //   .subscribe((event) => {
    //     console.log('NavigationStart:', event);
    //   })
  }

  onClick(pRuta) {
    this.navegacion.navigate([pRuta]);

  }

}
