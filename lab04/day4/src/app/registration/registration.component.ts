import { Component ,EventEmitter,Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  @Output() myEvent=new EventEmitter();
  name:string='';
  age:string='';
  email:string='';


  validationForm=new FormGroup({
    name:new FormControl("mahoud",[Validators.minLength(7),Validators.required]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    age:new FormControl(null,[Validators.min(20),Validators.max(40),Validators.required,Validators.pattern(/^\d+$/)]),
  });

  send(){
    if(this.validationForm.valid){
      this.myEvent.emit({name:this.name,age:this.age});
      this.name='';
      this.age='';
      this.email='';
      alert("data added successfully")
    }else{
      alert("plz check your inputs first")

    }
  }

  get validEmail(){
    return this.validationForm.controls["email"].valid;
  }
  get validName(){
    return this.validationForm.controls["name"].valid;
  }
  get validAge(){
    return this.validationForm.controls["age"].valid;
  }



}
