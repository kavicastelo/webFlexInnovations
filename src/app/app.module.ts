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
import {NgImageSliderModule} from "ng-image-slider";
import { MobDevComponent } from './components/service/mob-dev/mob-dev.component';
import { WebDevComponent } from './components/service/web-dev/web-dev.component';
import { FrontDevComponent } from './components/service/front-dev/front-dev.component';
import { BackDevComponent } from './components/service/back-dev/back-dev.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTooltipModule} from "@angular/material/tooltip";


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
    ContactComponent,
    MobDevComponent,
    WebDevComponent,
    FrontDevComponent,
    BackDevComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        NgImageSliderModule,
        MatExpansionModule,
        MatTooltipModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
