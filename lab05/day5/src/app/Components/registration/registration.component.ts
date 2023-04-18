import { Component ,EventEmitter,Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DemoService } from 'src/app/Services/demo.service';
import {Router} from "@angular/router"
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  @Output() myEvent=new EventEmitter();
  name:string='';
  email:string='';
  userName:string='';
  phone:string='';
  street:string='';
  city:string='';

  student:{name:string,
  email:string,
  userName:string,
  phone:string,
  street:string,
  city:string}|undefined;
  constructor(private myService:DemoService,private router:Router){

  }

  validationForm=new FormGroup({
    name:new FormControl(null,[Validators.minLength(7),Validators.required]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    userName:new FormControl(null,[Validators.minLength(7),Validators.required]),
    phone:new FormControl(null,[Validators.minLength(7),Validators.required,Validators.pattern("^01[0-9]{9}$")]),
    street:new FormControl(null,[Validators.minLength(5),Validators.required]),
    city:new FormControl(null,[Validators.minLength(5),Validators.required]),

  });

  send(){
    console.log(this.validationForm);
    if(this.validationForm.valid){
      // this.myEvent.emit({name:this.name,phone:this.phone,this.userName,this.street,this.city});
      let student={
        id:"",
        name:this.name,
        email:this.email,
        username:this.userName,
        phone:this.phone,
        address:{
          street:this.street,
          city:this.city}
        };
        this.myService.addNewUser(student);
        this.router.navigate(["/students"]);
        this.city='';
        this.name='';
        this.email='';
        this.userName='';
        this.phone='';
        this.street='';

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
  get validPhone(){
    return this.validationForm.controls["phone"].valid;
  }
  get validUserName(){
    return this.validationForm.controls["userName"].valid;
  }
  get validStreet(){
    return this.validationForm.controls["street"].valid;
  }
  get validCity(){
    return this.validationForm.controls["city"].valid;
  }



}
