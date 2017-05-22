import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent }         from './components/app/app.component';
import { HeroDetailComponent }  from './components/hero-details/hero-detail.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { HeroService }          from './core/services/hero.service';
import { DashboardComponent }   from './components/dashboard/dashboard.component';

const routes: Routes = [
      {
        // Specify the path to add to the url 
        // and the component which needs to be displayed (it will be created everytime)
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
      { // When the app starts, will show the dashboard and display 
        // a '/dashboard' URL in the browser address bar
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
    ];
    
@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    // forRoot() -> supplies the Router service providers and directives needed for routing, 
    // and performs the initial navigation based on the current browser URL.
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ] // Browser starts here
})

export class AppModule { }
