import { Component, EventEmitter, Input , Output} from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent {
  @Input() value = 0;
  // @Input() step: number = 1;
  // @Input() numLog = 0;
  @Output() valueChange = new EventEmitter();


  
  decrease(step1: string){
    const step = Number(step1);
    if(this.value - step >= 0){
      this.value = this.value - step;
      this.valueChange.emit(this.value);
    } 
  }
  increase(step2: string){
    const step = Number(step2);
    if(this.value + step <= 100){
      this.value = this.value + step;
      this.valueChange.emit(this.value);
    } 
  }

  logText(num : any){
    // this.numLog = num;
    console.log(num);
  }

}
