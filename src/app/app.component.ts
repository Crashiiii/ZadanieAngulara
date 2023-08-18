import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  isLoggedIn: boolean = false;

  user$ = this.auth.user$;

  constructor(private auth: AuthService) {
    this.auth.user$.subscribe((user) => {
      this.isLoggedIn = !!user;
    });
  }
  ngOnInit(): void {}
  
  logout() {
    this.auth.logout();
  }
}
