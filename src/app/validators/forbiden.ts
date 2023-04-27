import { AbstractControl } from "@angular/forms";

export function nameValidation(name:AbstractControl){


    if(name.value != 'pradumna'){
        return{nameValid:true}
    }
    return null
}


export function dateValid(name:AbstractControl){

let year = new Date(name.value)
    if(Number(year)< Number(new Date())){
        return{dateValid:true}
    }
    return null
}