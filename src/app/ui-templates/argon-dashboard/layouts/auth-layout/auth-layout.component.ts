import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['../../argon-dashboard.component.scss', './auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit, OnDestroy {
  test: Date = new Date();
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    /**argon-dashboard class has to be added to the root html tag since all argon.css styles 
     * for argon-dashboard are wrapped in argon-dashboard class to avoid collisions with argon-design-system*/
    var html = document.getElementsByTagName("html")[0];
    html.classList.add("argon-dashboard");
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("bg-default");
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });

  }
  ngOnDestroy() {
    var html = document.getElementsByTagName("html")[0];
    html.classList.remove("argon-dashboard");
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("bg-default");
  }
}
