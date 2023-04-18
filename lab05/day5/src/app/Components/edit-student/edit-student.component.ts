import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';
import {Router} from "@angular/router"
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit{

  id:number|undefined;
  student:any;
  constructor(private myService:DemoService,myRoute:ActivatedRoute,private router:Router){
    this.id=+myRoute.snapshot.params["id"];
  }
  ngOnInit(){
    this.student=this.myService.GetUserById(this.id).subscribe({
      next:(data)=>{this.student=data},
      error:(err)=>{console.log(err)}
    });
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
    console.log(this.student);

    if(this.validationForm.valid){
        this.myService.updateUser(this.student);
        this.router.navigate(["/students"]);
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
