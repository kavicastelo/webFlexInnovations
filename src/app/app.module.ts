import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import {MatIconModule} from "@angular/material/icon";
import { ServiceComponent } from './components/service/service.component';
import { AboutComponent } from './components/about/about.component';
import { WorksComponent } from './components/works/works.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { FaqComponent } from './components/faq/faq.component';
import { JoinCrewComponent } from './components/join-crew/join-crew.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    AboutComponent,
    WorksComponent,
    TechnologiesComponent,
    FaqComponent,
    JoinCrewComponent,
    NotFoundComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
