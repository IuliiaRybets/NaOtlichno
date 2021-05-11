import {AfterViewInit, Component, ElementRef, OnInit, OnDestroy, EventEmitter, HostListener, Output, ViewChild} from '@angular/core';
import { Subject, Subscription, BehaviorSubject } from 'rxjs';
import {Router} from '@angular/router';
import {ContactService} from '../../service/contact.service';
import { TelegramMessage, TelegramService } from '../../service/telegram.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-telegram',
  templateUrl: './telegram.component.html',
  styleUrls: ['./telegram.component.scss']
})
export class TelegramComponent implements OnInit, AfterViewInit, OnDestroy {
  public readonly form: FormGroup;
  public readonly connected: BehaviorSubject<boolean>;
  public readonly messages: BehaviorSubject<Array<TelegramMessage>>;

  
  @ViewChild('scroller', {static: true})
  private _scroller: ElementRef;


  constructor(private readonly _telegramService: TelegramService,
              private readonly _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      message: ['']
    });
    this.connected = this._telegramService.isConnected();
    this.messages = this._telegramService.getMessages();
  }

  ngOnInit(): void {
    this._telegramService.init();

    this._telegramService.getMessages().subscribe( ( ) =>
    {
      setTimeout( ( ) =>
      {
        const elem = (this._scroller.nativeElement as HTMLElement);
        elem.scrollTop = elem.scrollHeight;
      }, 100);
    });
  }

  ngOnDestroy(): void {
  }


  //@ViewChild('script', {static: true}) script: ElementRef;

  // tslint:disable-next-line:typedef
  convertToScript() {
    /* const element = this.script.nativeElement;
     const script = document.createElement('script');
     script.src = 'https://telegram.org/js/telegram-widget.js?5';
     //script.setAttribute('data-telegram-login', environment.telegramBotName);
     script.setAttribute('data-size', 'large');
     // Callback function in global scope
     script.setAttribute('data-onauth', 'loginViaTelegram(user)');
     script.setAttribute('data-request-access', 'write');
     element.parentElement.replaceChild(script, element);*/
  }

  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
    // this.convertToScript();
  }


  public async sendMessage ( ): Promise<void>
  {
    const msg = this.form.value.message.trim();
    if ( ! msg )
    {
      return;
    }

    this.form.patchValue({
      message: ''
    });

    await this._telegramService.sendMessage(msg);
  }
}
