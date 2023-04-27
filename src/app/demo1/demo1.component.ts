import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dateValid, nameValidation } from '../validators/forbiden';
import { ServiceService } from '../ser/service.service';
@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {

newForm!:FormGroup;

  constructor(private fb:FormBuilder,private ser:ServiceService){}

  ngOnInit(){
this.newForm = this.fb.group({
  name:['',[Validators.required,nameValidation,Validators.minLength(4)]],
  email:['',[Validators.required,Validators.email]],
  date:['',[dateValid]],
  password:['',[Validators.required,
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z/d$@$!%*?&].{8,}')]],
  conformPassword:[]
})
  }

  get name(){
    return this.newForm.get('name');
  }
  get email(){
    return this.newForm.get('email');
  }
  get password(){
    return this.newForm.get('password');
  }
  get date(){
    return this.newForm.get('date');
  }

  onsubmit(){
    console.log(this.newForm.value);
    this.ser.showData(this.newForm.value)
  }
}
