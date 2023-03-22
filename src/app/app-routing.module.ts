import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ServiceComponent} from "./components/service/service.component";
import {WorksComponent} from "./components/works/works.component";
import {TechnologiesComponent} from "./components/technologies/technologies.component";
import {FaqComponent} from "./components/faq/faq.component";
import {JoinCrewComponent} from "./components/join-crew/join-crew.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {ContactComponent} from "./components/contact/contact.component";
import {BackDevComponent} from "./components/service/back-dev/back-dev.component";
import {FrontDevComponent} from "./components/service/front-dev/front-dev.component";
import {WebDevComponent} from "./components/service/web-dev/web-dev.component";
import {MobDevComponent} from "./components/service/mob-dev/mob-dev.component";
import {DashbordComponent} from "./components/dashbord/dashbord.component";
import {LoginComponent} from "./components/login/login.component";
import {AdminComponent} from "./components/admin/admin.component";
import {AddUsersComponent} from "./components/admin/add-users/add-users.component";
import {SettingComponent} from "./components/admin/setting/setting.component";
import {UsersComponent} from "./components/admin/users/users.component";
import {DashboardUsersComponent} from "./components/dashbord/dashboard-users/dashboard-users.component";
import {DashboardSettingComponent} from "./components/dashbord/dashboard-setting/dashboard-setting.component";
import {AdminLoginComponent} from "./components/admin-login/admin-login.component";
import {ChatBotComponent} from "./components/chat-bot/chat-bot.component";
import {BlogComponent} from "./components/blog/blog/blog.component";
import {BlogSingle1Component} from "./components/blog/blog-single1/blog-single1.component";
import {BlogSingle2Component} from "./components/blog/blog-single2/blog-single2.component";
import {DashboardMainComponent} from "./components/dashbord/dashboard-main/dashboard-main.component";
import {AdminSigninComponent} from "./components/admin-signin/admin-signin.component";
import {MessagesComponent} from "./components/admin/messages/messages.component";

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"service", component:ServiceComponent},
  {path:"works", component:WorksComponent},
  {path:"technologies", component:TechnologiesComponent},
  {path:"contact", component:ContactComponent},
  {path:"faq", component:FaqComponent},
  {path:"join-crew", component:JoinCrewComponent},
  {path:"mobile-dev", component:MobDevComponent},
  {path:"web-dev", component:WebDevComponent},
  {path:"frontend-dev", component:FrontDevComponent},
  {path:"backend-dev", component:BackDevComponent},
  {path:"dashboard", component:DashbordComponent, children:[
      {path: "", redirectTo: "/dashboard/dashboard", pathMatch: "full"},
      {path: "dashboard", component: DashboardMainComponent},
      {path: "users", component: DashboardUsersComponent},
      {path: "settings", component: DashboardSettingComponent},
    ]},
  {path:"login", component:LoginComponent},
  {path:"admin-login", component:AdminLoginComponent},
  {path:"admin-sign-in", component:AdminSigninComponent},
  {path:"admin-2000-private-access", component:AdminComponent, children:[
      {path:"", redirectTo:"/admin-2000-private-access/new-users", pathMatch:"full"},
      {path:"new-users", component:AddUsersComponent},
      {path:"messages", component:MessagesComponent},
      {path:"users", component:UsersComponent},
      {path:"settings", component:SettingComponent},
    ]},
  {path:"chat-bot", component:ChatBotComponent},
  {path:"blog", component:BlogComponent, children:[
      {path: "blog-single-1", component: BlogSingle1Component},
      {path: "blog-single-2", component: BlogSingle2Component}
    ]},
  {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
