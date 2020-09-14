import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor(private navegacion: Router) { }

  ngOnInit(): void {
  }

  onClick(pRuta) {
    this.navegacion.navigate([pRuta]);

  }
}
