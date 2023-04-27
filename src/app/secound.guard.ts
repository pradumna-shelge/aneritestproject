import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirstService } from './server/first.service';

@Injectable({
  providedIn: 'root'
})
export class SecoundGuard implements CanActivate {
  constructor(private ser : FirstService){}
  canActivate() {
    return this.ser.islog();
  }
}
