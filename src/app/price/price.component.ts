import { Component, OnInit } from '@angular/core';
import { TextProject } from '../shared/text';
import { Router } from '@angular/router';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  text = TextProject;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  contactClick() {
    this.router.navigateByUrl('/contact')
  }
}
