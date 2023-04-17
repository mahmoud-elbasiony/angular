import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  @Output() myEvent=new EventEmitter();
  name:string='';
  age:number|''='';

  send(){
    if(this.name.length>3 && +this.age>=20 && +this.age<=40){

      this.myEvent.emit({name:this.name,age:this.age});
      this.name='';
      this.age='';
    }
  }

}
