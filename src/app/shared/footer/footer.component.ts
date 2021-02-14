import { formatDate } from '@angular/common';
import { Component, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  now = new Date();
  nowFormatted: string;
  
  constructor() { 
    this.nowFormatted = formatDate(this.now, 'yyyy', 'en-US');
  }

  ngOnInit(): void {
  }

}
