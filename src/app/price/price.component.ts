import { Component, OnInit } from '@angular/core';
import { TextProject } from '../shared/text';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  text = TextProject;
  constructor() { }

  ngOnInit(): void {
  }

}
