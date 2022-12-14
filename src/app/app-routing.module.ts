import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {DemoComponent} from "./components/demo/demo.component";
import {ExerciseComponent} from "./components/exercise/exercise.component";
import {StopwatchComponent} from "./components/stopwatch/stopwatch.component";

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'demo',component:DemoComponent},
  {path:'exercise',component:ExerciseComponent},
  {path:'stopwatch',component:StopwatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
