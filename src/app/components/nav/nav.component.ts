import {Component, OnInit} from '@angular/core';

class Link {
  public title: string;
  public url? : string;
  public children? : Link[];
  public isVisible? : boolean ;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  public links : Link[];

  ngOnInit(): void {
       this.links = [{title:'Demo', url:'/demo'},
         {title:'Exercise', url:'/exercise'},
         {title:'Stopwatch', url:'/stopwatch'}
                                                   ]
  }

}
