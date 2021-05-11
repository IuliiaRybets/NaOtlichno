import { formatDate } from '@angular/common';
import {Component, OnDestroy, OnInit, Output, Pipe} from '@angular/core';
import {Route, Router} from '@angular/router';
import {ContactService} from '../../service/contact.service';
import {Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  now = new Date();
  nowFormatted: string;

  constructor(readonly router: Router, private readonly serviceContact: ContactService) {
    this.nowFormatted = formatDate(this.now, 'yyyy', 'en-US');
  }

  onTelegram(evt: Event): void {
    evt.cancelBubble = true;

    this.serviceContact.toggleChat();
  }

  sendEmail(): void {
    this.serviceContact.sendEmailService();
  }
}
