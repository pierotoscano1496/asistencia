import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private sidebarState: boolean = true;
  @Output() sendSidebarState: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  setSidebarState() {
    this.sidebarState = !this.sidebarState;
    this.sendSidebarState.emit(this.sidebarState);
  }

}
