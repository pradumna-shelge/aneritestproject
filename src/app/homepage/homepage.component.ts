import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirstService } from '../server/first.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
newform!:FormGroup;
constructor(private ser:FirstService,private fb:FormBuilder,private router:Router){

  this.newform = this.fb.group({
    name:['',[Validators.required]]
  })
}


  onchange(){
this.ser.chnage()
this.router.navigate(['/admin'])

  }

  get name(){
    return this.newform.get('name')
  }
}
