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
  {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
