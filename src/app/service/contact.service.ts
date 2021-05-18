import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

export class ContactService {

  _url = 'http://localhost:8080/contact';
  /*  email = `yuliyarybets@gmail.com`;
   email = `naotlichno.com.ua@gmail.com`;
   subject = `Уважаемая команда`;*/

  constructor ( private readonly _httpClient: HttpClient ) {}

  public readonly displayChat = new BehaviorSubject(false);

  public sendFormValue(formGroup: FormGroup): Observable<any> {
    /*const oldValue = formControl.value;

    formControl.setValue(value);

    if (validOnly && formControl.invalid) {
      formControl.setValue(oldValue);
    }*/

    return this._httpClient.post<any>(this._url, formGroup);
  }

  public hideChat(): void {
    this.displayChat.next(false);
  }

  public toggleChat(): void {
    this.displayChat.next(!this.displayChat.getValue());
  }

  sendEmailService(): void {

  }

}
