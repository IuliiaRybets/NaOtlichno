import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {

  constructor( private router: Router, private readonly serviceContact: ContactService) { }

  ngOnInit(): void {
  }

  sendEmail(): void {
    this.serviceContact.sendEmailService();
  }

  onTelegram(evt: Event): void {
    evt.cancelBubble = true;
    this.serviceContact.toggleChat();
  }

  contactClick(): void {
    this.router.navigateByUrl('/contact');
  }

}
