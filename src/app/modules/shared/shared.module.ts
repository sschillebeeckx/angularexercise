import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimeToMinutesandseconds} from "./pipes/time-to-minutesandseconds";
import {CsToMsPipe} from "./pipes/cs-to-ms.pipe";



@NgModule({
  declarations: [TimeToMinutesandseconds,CsToMsPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TimeToMinutesandseconds
  ]
})
export class SharedModule { }
