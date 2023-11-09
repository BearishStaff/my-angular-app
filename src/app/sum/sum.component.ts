import { Component } from '@angular/core';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent {
  result = 0;
  value : string = "";
  subArr = [];
  sumNumber(input : string){
    this.result = 0;
    let arr: Array<number> = input.split(",").map(Number);

    for (let i = 0; i < arr.length; i++){

      if(arr[i]>0) this.result = this.result + arr[i];
    
    }
  }
}
