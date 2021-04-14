import {Inject, Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root'
})

export class RedirectGuard implements CanActivate {
  target?: string;
  constructor(private router: Router, @Inject(DOCUMENT) readonly document: Document ) {}
  /** The Window object from Document defaultView */
  get window(): Window { return this.document.defaultView; }

  /** Redirects instantly to the external link without the mediation of the router */
  public redirect(url: string, target: string = '_blank'): Promise<boolean> {

    return new Promise<boolean>( (resolve, reject) => {

      try { resolve(!!this.window.open(url, target)); }
      catch (e) { reject(e); }
    });
  }

  /** Returns true if the given url looks external */
  public external(url: string): boolean {
    return /^http(?:s)?:\/{2}\S+$/.test(url);
  }

  canActivate(route: ActivatedRouteSnapshot): boolean | Promise<boolean> {

    const url = route.queryParamMap.get('url');

    if ( this.external(url) ) {
      const target = route.queryParamMap.get('target');
      return this.redirect(url, target).then(() => false);
    }

    return true;

  }
}
