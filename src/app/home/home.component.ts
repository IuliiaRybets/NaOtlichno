import { Component, OnInit } from '@angular/core';
import { TextProject } from '../shared/text';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  text = TextProject;

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  contactClick() {
    this.router.navigateByUrl('/contact')
  }

}
