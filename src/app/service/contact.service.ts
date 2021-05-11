import {HostListener, Injectable} from '@angular/core';
import {FormControl} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {passBoolean} from 'protractor/built/util';


@Injectable({
    providedIn: 'root'
  })
export class ContactService {
  constructor (
  ) {}

  public readonly displayChat = new BehaviorSubject(false);

  public assignValueToControl(formControl: FormControl, value: any, validOnly: boolean) {
    const oldValue = formControl.value;

    formControl.setValue(value);

    if (validOnly && formControl.invalid) {
      formControl.setValue(oldValue);
    }
  }

  public hideChat(): void {
    this.displayChat.next(false);
  }

  public toggleChat(): void {
    this.displayChat.next(!this.displayChat.getValue());
  }

  sendEmailService(): void {
    const email = `naotlichno.com.ua@gmail.com`;
    const subject = `Уважаемая команда`;
    document.location.href = `mailto:` + email + `?subject=` + subject;
  }

}
