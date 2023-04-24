import { Component,Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  visible = true ;

  setEvent($event:boolean): void {
    this.visible = $event
  }
  
}
