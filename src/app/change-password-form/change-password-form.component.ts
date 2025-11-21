import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from './password.validator';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {

  form = new FormGroup({
    oldpassword: new FormControl('', Validators.required, PasswordValidator.oldPasswordCheck),
    newpassword: new FormControl('', Validators.required),
    confirmpassword: new FormControl('', Validators.required)
  }, {
    validators: PasswordValidator.passwordShouldMatch
  })

  get oldpassword(){
    return this.form.get('oldpassword');
  }

  get newpassword(){
    return this.form.get('newpassword');
  }

  get confirmpassword(){
    return this.form.get('confirmpassword');
  }

}
