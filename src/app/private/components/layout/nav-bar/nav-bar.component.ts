import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  userName :any ;
  userRole :any ;
  constructor(private _authService : AuthService) { }

  ngOnInit(): void {
     this.userName = this._authService.isLoggedIn();
     this.userRole = this._authService.getUserRole();

  }

}
