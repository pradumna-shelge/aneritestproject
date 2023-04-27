import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(arg1:string,arg2:string,arg3:string): string {
    return (arg1+arg2+arg3);
  }

}
