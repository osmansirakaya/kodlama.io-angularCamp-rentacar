
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from 'src/app/models/LoginModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService, private formBuilder: FormBuilder) { }
  userAddForm: FormGroup;
  us: LoginModel;
  usrs: LoginModel[];
  createUserAddForm() {
    this.userAddForm = this.formBuilder.group({
      eMail: ["", Validators.required],
      password: ["", Validators.required]

    })
  }
  ngOnInit(): void {
    this.createUserAddForm();
  }
  addUser() {
    if (this.userAddForm.valid) {
      this.us = Object.assign({}, this.userAddForm.value)
    }
    this.authService.addUser(this.us).subscribe(data => {
      alert(data.eMail+"Kişi Başarıyla Eklendi")
      location.reload();
    })

  }
}
