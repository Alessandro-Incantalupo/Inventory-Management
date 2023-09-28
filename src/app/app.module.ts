import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './page-modules/homepage/homepage.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { BradcrumbsComponent } from './core/bradcrumbs/bradcrumbs.component';
import { ProductListComponent } from './shared/product/product-list/product-list.component';
import { ProductComponent } from './shared/product/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavigationComponent,
    BradcrumbsComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
