import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ContactusModule } from './contactus/contactus.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    ContactusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
