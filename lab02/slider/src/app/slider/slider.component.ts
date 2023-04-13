import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {


  // images=document.querySelectorAll(".slide");
  //   slides=document.querySelectorAll(".slides")[0];
    number=1;
    max=6;
    slideprev(){
      this.number--<=1?this.number=1:this.number;
      console.log(this.number)
    }
    slidenext(){
      this.number++>=6?this.number=6:this.number;
      console.log(this.number)
    }
    intervalId:any;

    slide(){
      this.intervalId= setInterval(()=>{
        this.number++>=6?this.number=1:this.number;
      console.log(this.number)
      },500)
    }
    pause(){
      clearInterval(this.intervalId)
    }

}
