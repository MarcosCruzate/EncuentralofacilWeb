import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.userService.removeUser();
    this.router.navigateByUrl('/');
  }
}
