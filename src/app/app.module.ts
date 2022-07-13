import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './components/layout/layout.module';
import { RoutesModule } from './components/routes/routes.module';
import { SharedModule } from './components/shared/shared.module';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD


=======
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
>>>>>>> b4df42132572d40b419ae58e55e92d038fade78f

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    RoutesModule,
    SharedModule,
<<<<<<< HEAD
    RouterModule
=======
    RouterModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
>>>>>>> b4df42132572d40b419ae58e55e92d038fade78f
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
