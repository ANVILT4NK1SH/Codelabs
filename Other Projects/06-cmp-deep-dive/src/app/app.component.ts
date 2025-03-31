import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ServerStatusComponent } from "./dasboard/server-status/server-status.component";
import { TrafficComponent } from "./dasboard/traffic/traffic.component";
import { TicketsComponent } from "./dasboard/tickets/tickets.component";
import { DashboardItemComponent } from "./dasboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServerStatusComponent, TrafficComponent, TicketsComponent, DashboardItemComponent],
})
export class AppComponent {
 
  
}
