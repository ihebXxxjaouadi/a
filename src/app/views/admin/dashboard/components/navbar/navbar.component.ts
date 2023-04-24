import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  activated:boolean = true;

  @Output() getSetEvent = new EventEmitter<boolean>() ;

  setFirstView(): void {
    this.activated = true
    this.getSetEvent.emit(this.activated)
  }


  setSecondView(): void {
    this.activated = false
    this.getSetEvent.emit(this.activated)

  }
}
