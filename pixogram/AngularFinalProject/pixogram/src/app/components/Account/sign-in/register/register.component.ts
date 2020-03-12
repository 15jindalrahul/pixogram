import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/model/register';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup
  public register= new Register('','','','');
  constructor() { }

  ngOnInit(): void {
  }
  save(userForm: Register, isValid: boolean)
  {

  }
onSubmitForm(){
    console.log(this.register);
  }
}
