import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students=[{
    name:"mahmoud",
    email:"mahmoud@test.com",
    age:"26",
    phone:"01516451647"
  },
  {
    name:"ahmed",
    email:"ahmed@test.com",
    age:"26",
    phone:"01516452344"
  },{
    name:"omar",
    email:"omar@test.com",
    age:"26",
    phone:"01516442344"
  },{
    name:"yossef",
    email:"yossef@test.com",
    age:"26",
    phone:"01674635345"
  },]
}
