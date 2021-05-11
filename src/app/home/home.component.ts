import { Component, OnInit } from '@angular/core';
import { TextProject } from '../shared/text';
import { Router } from '@angular/router';
import {ContactService} from '../service/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  text = TextProject;

  constructor(private router: Router, private readonly serviceContact: ContactService) {}

  ngOnInit(): void {

  }

  contactClick(): void {
    this.router.navigateByUrl('/contact');
  }

  sendEmail(): void {
    this.serviceContact.sendEmailService();
  }
}
