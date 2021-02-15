import { Component, OnInit } from '@angular/core';
import { TextProject } from '../shared/text';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  text = TextProject;
  constructor() { }

  ngOnInit(): void {
  }

}
