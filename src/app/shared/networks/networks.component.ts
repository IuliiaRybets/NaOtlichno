import {Component, EventEmitter, OnInit, Output, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {Subject, Subscription} from 'rxjs';
import {ContactService} from '../../service/contact.service';

@Component({
  selector: 'app-networks',
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.scss']
})
export class NetworksComponent {
  constructor( readonly router: Router, private readonly service: ContactService) { }

  public onTelegram(evt: Event): void {
    evt.cancelBubble = true;

    this.service.toggleChat();
  }
}
