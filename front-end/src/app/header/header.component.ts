import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  logout() {
    this.services.logout();
    this.router.navigate(['/login']);
  }
  constructor(private services: UserService, private router: Router) {}

  ngOnInit(): void {}
}
