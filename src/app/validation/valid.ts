import { AbstractControl } from "@angular/forms";


export function datevalid(pro:AbstractControl){

   let  currDate = new Date();
   let aneri = new Date(pro.value)

   let cur = currDate.getFullYear();
   let ani = aneri.getFullYear()
}