import { Injectable } from '@angular/core';
import {FormControl} from '@angular/forms';


@Injectable({
    providedIn: 'root'
  })
export class ContactService {
  constructor (
  ) {}

  public assignValueToControl(formControl: FormControl, value: any, validOnly: boolean) {
    const oldValue = formControl.value;

    formControl.setValue(value);

    if (validOnly && formControl.invalid) {
      formControl.setValue(oldValue);
    }
  }

}
