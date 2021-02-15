import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'pay',
    loadChildren: () => import('./pay/pay.module').then(m => m.PayModule)
  },
  {
    path: 'price',
    loadChildren: () => import('./price/price.module').then(m => m.PriceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
