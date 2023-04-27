import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirstService } from 'src/app/server/first.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent {
constructor(private ser:FirstService,private route:Router){}

  logout(){
console.log(this.ser.flag)

this.ser.flag=false;
this.route.navigate(['/home'])
  }
}
