import {Directive, ElementRef, HostListener, OnDestroy} from '@angular/core';
import {ContactService} from '../service/contact.service';

@Directive({
  selector: '[appClickOutside]',
})
export class ClickOutsideDirective {
  constructor(private readonly elRef: ElementRef, private readonly service: ContactService) {
  }

  @HostListener('document:click', ['$event'])
  clickout(event): void {
    if (!this.elRef.nativeElement.contains(event.target)) {
        this.service.hideChat();
    }
  }
}
