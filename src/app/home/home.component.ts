import { Component, OnInit } from '@angular/core';
import { TextProject } from '../shared/text';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  text = TextProject;

  constructor() {}

  ngOnInit(): void {
    
  }

}
