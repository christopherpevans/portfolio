import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent {

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Customers', cols: 2, rows: 1 },
          { title: 'Analytics', cols: 1, rows: 1 },
          { title: 'Contacts', cols: 1, rows: 2 },
          { title: 'Sales', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Customers', cols: 2, rows: 1 },
        { title: 'Analytics', cols: 1, rows: 1 },
        { title: 'Contacts', cols: 1, rows: 2 },
        { title: 'Sales', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }

}
