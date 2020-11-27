import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild, HostListener, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DOCUMENT } from '@angular/common';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { filter } from 'rxjs/operators';

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;

@Component({
  selector: 'app-argon-design-system',
  templateUrl: './argon-design-system.component.html',
  styleUrls: ['./argon-design-system.component.scss']
})
export class ArgonDesignSystemComponent implements OnInit, OnDestroy {

    private navbar! : HTMLElement;

    constructor( private renderer : Renderer2, private router: Router, @Inject(DOCUMENT,) private document: any, private element : ElementRef, public location: Location) {
    //This has to be done in the constructor. Not ngOnInit.
    //https://stackoverflow.com/questions/56634455/angular-router-event-navigationend-not-firing-when-expected       
      this.router.events.subscribe(() => {
          if (window.outerWidth > 991) {
              window.document.children[0].scrollTop = 0;
          }else{
              window.document.activeElement!.scrollTop = 0;
          }
          this.renderer.listen('window', 'scroll', (event) => {
              const number = window.scrollY;
              if (number > 150 || window.pageYOffset > 150) {
                  // add logic
                  this.navbar.classList.add('headroom--not-top');
              } else {
                  // remove logic
                  this.navbar.classList.remove('headroom--not-top');
              }
          });
      });
      this.hasScrolled();
    }

    ngOnInit() {
        this.navbar = this.element.nativeElement.children[0].children[0];
        /**argon-dashboard class has to be added to the root html tag since all argon.css styles 
         * for argon-design-system are wrapped in .argon-design-system class to avoid collisions with argon-dashboard*/
        var html = document.getElementsByTagName("html")[0];
        html.classList.add("argon-design-system");
    }

    ngOnDestroy() {
        var html = document.getElementsByTagName("html")[0];
        html.classList.remove("argon-design-system");
    }

    @HostListener('window:scroll', ['$event'])
    hasScrolled() {

        var st = window.pageYOffset;
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        var navbar = document.getElementsByTagName('nav')[0];

        // If they scrolled down and are past the navbar, add class .headroom--unpinned.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            if (navbar.classList.contains('headroom--pinned')) {
                navbar.classList.remove('headroom--pinned');
                navbar.classList.add('headroom--unpinned');
            }
            // $('.navbar.headroom--pinned').removeClass('headroom--pinned').addClass('headroom--unpinned');
        } else {
            // Scroll Up
            //  $(window).height()
            if(st + window.innerHeight < document.body.scrollHeight) {
                // $('.navbar.headroom--unpinned').removeClass('headroom--unpinned').addClass('headroom--pinned');
                if (navbar.classList.contains('headroom--unpinned')) {
                    navbar.classList.remove('headroom--unpinned');
                    navbar.classList.add('headroom--pinned');
                }
            }
        }

        lastScrollTop = st;
    };
}
