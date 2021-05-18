import { Component, OnInit } from '@angular/core';
import { TextProject } from '../shared/text';
import { ErrorText } from '../shared/error';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { SUBJECTNAME } from '../shared/data.model';
import { ContactService } from '../service/contact.service';
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
  name = new FormControl();
  email = new FormControl();
  tel = new FormControl();
  topic = new FormControl();
  type = new FormControl();
  subject = new FormControl();
  deadline = new FormControl();
  message = new FormControl();

  constructor(private readonly fb: FormBuilder, private readonly contactService: ContactService) {
    this.subjectName = SUBJECTNAME;
    this.subjectName.sort();
     }

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      name: ['', Validators.required],
      email: [null, [Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        tel: ['', Validators.required],
      topic: ['', Validators.required],
      type: ['', Validators.required],
      subject: ['', Validators.required],
      deadline: ['', Validators.required],
      message: ['']
     });
    this.orderForm.valueChanges.pipe(
     // switchMap(form => this.contactService.assignValueToControl(form))
    );
  }

  changeSubject(sub: any): void {
    this.subjectName = this.subjectName.find(val => val.name === sub);
    console.log(sub);
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.contactService.sendFormValue(this.orderForm.getRawValue()).subscribe(
      data => data
    );
  }
}
