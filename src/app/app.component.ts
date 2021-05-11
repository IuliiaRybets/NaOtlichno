import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ContactService} from './service/contact.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'naotlichno';
  getDisplayChat: boolean;

  onActivate(event): void {
    window.scroll(0, 0);
  }

  constructor( public readonly service: ContactService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
