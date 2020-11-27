import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/ui-templates/dashboard/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/ui-templates/dashboard/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    { path: '/ui-templates/dashboard/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/ui-templates/dashboard/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/ui-templates/dashboard/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/ui-templates/dashboard/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    { path: '/ui-templates/dashboard/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../../argon-dashboard.component.scss', './sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems!: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
