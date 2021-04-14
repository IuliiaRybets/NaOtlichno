import { Component, OnInit } from '@angular/core';
import {RedirectGuard} from '../../service/redirectGuard.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isCollapsed: boolean;

  constructor(private redirect: RedirectGuard, readonly router: Router ) { }

  ngOnInit(): void {
    this.isCollapsed = true;
  }

}
