import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirstService {
flag=false;
  constructor(private route:Router) { }

  islog(){
  
    return this.flag;
  }

  chnage(){
  
    this.flag = ! this.flag
  }
}
