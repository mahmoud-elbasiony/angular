import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registration';
  dataArray:{name:string,age:number}[]=[];

  sendDate(data:any){
    this.dataArray.push(data);

  }
}
