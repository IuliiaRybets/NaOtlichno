import { Component, OnInit } from '@angular/core';
import { TextProject } from '../shared/text';
import { ErrorText } from '../shared/error';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SUBJECTNAME } from '../shared/data.model';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  error = ErrorText;
  text = TextProject;
  subjectName: any[];

  orderForm: FormGroup;
  subject = new FormControl();

  
  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      subject: ['', Validators.required],
     });
    this.subjectName = SUBJECTNAME;
  }

  changeSubject(sub: any) {
    this.subjectName = this.subjectName.find(val => val.name === sub);
    console.log(sub);
 }

}
