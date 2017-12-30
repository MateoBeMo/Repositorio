import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isCollapsed = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  logOut(): void {
    this.userService.logout();
  }
}
