import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './components/home/home.component';
import {MatIconModule} from "@angular/material/icon";
import {ServiceComponent} from './components/service/service.component';
import {AboutComponent} from './components/about/about.component';
import {WorksComponent} from './components/works/works.component';
import {TechnologiesComponent} from './components/technologies/technologies.component';
import {FaqComponent} from './components/faq/faq.component';
import {JoinCrewComponent} from './components/join-crew/join-crew.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {ContactComponent} from './components/contact/contact.component';
import {NgImageSliderModule} from "ng-image-slider";
import {MobDevComponent} from './components/service/mob-dev/mob-dev.component';
import {WebDevComponent} from './components/service/web-dev/web-dev.component';
import {FrontDevComponent} from './components/service/front-dev/front-dev.component';
import {BackDevComponent} from './components/service/back-dev/back-dev.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {DashbordComponent} from './components/dashbord/dashbord.component';
import {LoginComponent} from './components/login/login.component';
import {MatButtonModule} from "@angular/material/button";
import {AdminComponent} from './components/admin/admin.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {AddUsersComponent} from './components/admin/add-users/add-users.component';
import {SettingComponent} from './components/admin/setting/setting.component';
import {UsersComponent} from './components/admin/users/users.component';
import {DashboardUsersComponent} from './components/dashbord/dashboard-users/dashboard-users.component';
import {DashboardSettingComponent} from './components/dashbord/dashboard-setting/dashboard-setting.component';
import {AdminLoginComponent} from './components/admin-login/admin-login.component';
import {ChatComponent} from './components/chat/chat/chat.component';
import {MessageComponent} from './components/chat/message/message.component';
import {ChatBotComponent} from './components/chat-bot/chat-bot.component';
import {BlogComponent} from './components/blog/blog/blog.component';
import {BlogSingle1Component} from './components/blog/blog-single1/blog-single1.component';
import {BlogSingle2Component} from './components/blog/blog-single2/blog-single2.component';
import { DashboardMainComponent } from './components/dashbord/dashboard-main/dashboard-main.component';
import { AdminSigninComponent } from './components/admin-signin/admin-signin.component';
import { MessagesComponent } from './components/admin/messages/messages.component';
import { DashboardMessagesComponent } from './components/dashbord/dashboard-messages/dashboard-messages.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { DashboardFeedbacksComponent } from './components/dashbord/dashboard-feedbacks/dashboard-feedbacks.component';


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
    BackDevComponent,
    DashbordComponent,
    LoginComponent,
    AdminComponent,
    AddUsersComponent,
    SettingComponent,
    UsersComponent,
    DashboardUsersComponent,
    DashboardSettingComponent,
    AdminLoginComponent,
    ChatComponent,
    MessageComponent,
    ChatBotComponent,
    BlogComponent,
    BlogSingle1Component,
    BlogSingle2Component,
    DashboardMainComponent,
    AdminSigninComponent,
    MessagesComponent,
    DashboardMessagesComponent,
    FeedbacksComponent,
    DashboardFeedbacksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgImageSliderModule,
    MatExpansionModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatButtonModule,
    MatSidenavModule,
    NgxStarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
