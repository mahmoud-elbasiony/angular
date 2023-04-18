import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{
  students:any;

  constructor(myService:DemoService){

    myService.GetAllUsers().subscribe({
      next:(data)=>{this.students=data},
      error:(err)=>{console.log(err)}
    });

  }
  ngOnInit(): void {

  }

}
