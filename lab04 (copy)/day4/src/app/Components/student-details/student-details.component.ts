import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';
import {Router} from "@angular/router"
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit{
  private route:ActivatedRoute|null=null;
  private id:number=0;

  student:any;


  public constructor(private myRoute:ActivatedRoute,private myService:DemoService,private  router:Router){
    this.route=myRoute;
    this.id=+myRoute.snapshot.params["id"];

  }
  ngOnInit(): void {
    this.myService.GetUserById(this.id).subscribe({
      next:(data)=>{this.student=data},
      error:(err)=>{console.log(err)}
    });
  }
  delete(){
    this.myService.deleteUser(this.student);
    this.router.navigate(["/students"]);

  }


}
