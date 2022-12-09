import { Component } from '@angular/core';


@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css'],

})
export class StopwatchComponent {
  time:  number;
  timer: any;
  started : boolean = false;
  startEnabled: boolean;
  pauseEnabled: boolean;
  resetEnabled: boolean;

  constructor() { }

  ngOnInit(): void {
    this.time = 0;
    this.pauseEnabled = false;
    this.resetEnabled = false;
    this.startEnabled=true;
  }


  public startTimer()
  {
    this.timer = setInterval(() => {
      this.time++
    }, 1000);
    this.started = true;
    this.pauseEnabled = true;
    this.resetEnabled = true;
    this.startEnabled=false;
  }

  public resetTimer()
  {
    clearTimeout(this.timer);
    this.time=0;
    this.started = true;
    this.pauseEnabled = false;
    this.resetEnabled = false;
    this.startEnabled=true;
  }

  public pauseTimer()
  {
    this.started = false;
    clearTimeout(this.timer);
    this.pauseEnabled = false;
    this.resetEnabled = true;
    this.startEnabled=true;
  }
}
