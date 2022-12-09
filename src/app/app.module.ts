import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { DemoComponent } from './components/demo/demo.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { StopwatchComponent } from './components/stopwatch/stopwatch.component';
import {SharedModule} from "./modules/shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    DemoComponent,
    ExerciseComponent,
    StopwatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
