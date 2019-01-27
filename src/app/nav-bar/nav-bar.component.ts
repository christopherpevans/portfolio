import { Component, OnInit } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  badgeCount = null;
  inCart = 0;
   user = localStorage.getItem('currentUser');

  constructor(public authService: AuthService,
              private router: Router,
              private dataService: DataService) { }



  ngOnInit() {

    this.dataService.getContacts()
      .subscribe(data => {
        if (data) {
          this.badgeCount = data.length;
        } else {
          this.badgeCount = 0;
        }

      });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
