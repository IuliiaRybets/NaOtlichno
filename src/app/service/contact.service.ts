import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })

export class ContactService {

  private storageForm: any = {};

  constructor ( private readonly _httpClient: HttpClient ) {}

  public readonly displayChat = new BehaviorSubject(false);

  public sendFormValue(formGroup: FormGroup): Observable<any> {
    /*const oldValue = formControl.value;

    formControl.setValue(value);

    if (validOnly && formControl.invalid) {
      formControl.setValue(oldValue);
    }*/
   
    
    return this._httpClient.post<any>(`${environment.api_base}/contact`, formGroup);
  }

  setFormValue(formGroup: FormGroup) {
    localStorage.setItem(this.storageForm, JSON.stringify(formGroup));
  }

  getFormValue() {
    let data = localStorage.getItem(this.storageForm);
    return JSON.parse(data);
  }

  clearFormValue() {
    localStorage.removeItem(this.storageForm);
  }

  cleanAll() {
    localStorage.clear()
  }

  public hideChat(): void {
    this.displayChat.next(false);
  }

  public toggleChat(): void {
    this.displayChat.next(!this.displayChat.getValue());
  }

  sendEmailService(): void {
    window.location.href = "mailto:naotlichno.com.ua@gmail.com?subject=Работа%20на%20заказ";
  }

}
