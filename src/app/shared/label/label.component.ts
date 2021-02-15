import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  @Input() labelName: string;
  @Input() showError = false;
  @Input() errorText?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
