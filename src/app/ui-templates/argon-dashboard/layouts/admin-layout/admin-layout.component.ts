import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminLayoutComponent implements OnInit, OnDestroy {

  constructor() { }

 ngOnInit() {
    /**argon-dashboard class has to be added to the root html tag since all argon.css styles 
     * for argon-dashboard are wrapped in .argon-dashboard class to avoid collisions with argon-design-system*/
    var html = document.getElementsByTagName("html")[0];
    html.classList.add("argon-dashboard");
  }
  ngOnDestroy() {
    var html = document.getElementsByTagName("html")[0];
    html.classList.remove("argon-dashboard");
  }
}
