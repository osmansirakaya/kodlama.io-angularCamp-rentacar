import { User } from './../../../models/user';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: User = new User();
  constructor(private accountService:AccountService,
    public translate: TranslateService) { 
       // Register translation languages
    translate.addLangs(['en', 'tr']);
    // Set default language
    translate.setDefaultLang('en');
    }
    translateLanguageTo(lang: string) {
      this.translate.use(lang);
    }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    this.accountService.login(this.model);
    console.log(this.model.userName);
    console.log(this.model.password);
    console.log(this.accountService.isLoggedIn());


  }
}
