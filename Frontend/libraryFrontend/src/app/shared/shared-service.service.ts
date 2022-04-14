import { Injectable } from '@angular/core';
import { FormGroup, FormGroupName } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  message=new Object;
  constructor() { }
  setMessage(data:any){
   this.message = data;
   console.log('data',data);
   console.log('message',this.message);
   
   
  }
  getMessage(){
   
    return this.message;
  }
}
