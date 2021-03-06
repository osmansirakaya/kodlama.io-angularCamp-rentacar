import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private accountService:AccountService, private authService:AuthService) { }

  ngOnInit(): void {
  }
  isLoggedIn(){
    return this.accountService.isLoggedIn()
  }

  logOut(){
    this.accountService.logOut()
  }

}
