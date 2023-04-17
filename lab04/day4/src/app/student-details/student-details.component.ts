import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  route:ActivatedRoute|null=null;
  id:number=0;

  students=[{
    name:"mahmoud",
    email:"mahmoud@test.com",
    age:"26",
    phone:"01516451647",
    address:"abd elsalam elshazly"
  },
  {
    name:"ahmed",
    email:"ahmed@test.com",
    age:"26",
    phone:"01516452344",
    address:"abd elsalam elshazly"
  },{
    name:"omar",
    email:"omar@test.com",
    age:"26",
    phone:"01516442344",
    address:"abd elsalam elshazly"
  },{
    name:"yossef",
    email:"yossef@test.com",
    age:"26",
    phone:"01674635345",
    address:"abd elsalam elshazly"
  },];


  public constructor(myRoute:ActivatedRoute){
    this.route=myRoute;
    this.id=+myRoute.snapshot.params["id"];
  }
}
