import { Component, OnInit, Input, Output } from '@angular/core';
import { TextProject } from '../text';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info-btn',
  templateUrl: './info-btn.component.html',
  styleUrls: ['./info-btn.component.scss']
})
export class InfoBtnComponent implements OnInit {

  @Input() text?: string;
  @Output() infoButtonSelect = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect() {
    this.infoButtonSelect.emit(this.text); 
    console.log(this.text)
  }
}
