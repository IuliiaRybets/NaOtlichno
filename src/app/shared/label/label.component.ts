import { Component, OnInit, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TextProject } from '../text';


@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  @Input() labelName: string;
  @Input() showError: boolean;
  @Input() errorText?: string;
  @Input() infoText?: any;


  // tslint:disable-next-line:variable-name
  constructor(private _modalService: NgbModal) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  selectInfoBtn(info: any){
    this._modalService.open(info);
  }
}
