import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output('toggle') toggle = new EventEmitter<boolean>();

  public isMobile = window.innerWidth < 768

  constructor() { }

  ngOnInit() {
  }

  public toggleMenu(): void {
    this.toggle.emit(true);
  }

}
