import { Component, ViewChild } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @ViewChild('drawer') public drawer;

  constructor(
      private router: Router
  ) {
    if(window.innerWidth < 768){
      router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.drawer.toggle();
        }
      });
    }
  }
}
