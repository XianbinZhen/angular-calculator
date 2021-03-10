import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  @Input() number1:string = '';
  @Input() number2:string = '';
  result:string = '';
  history:string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  add(): void{
    this.result = +this.number1 + +this.number2 + '';
    this.history.unshift(`${this.number1} + ${this.number2} = ${this.result}`);
    this.number1 = '';
    this.number2 = '';
  }

  minus(): void{
    this.result = +this.number1 - +this.number2 + '';
    this.history.unshift(`${this.number1} - ${this.number2} = ${this.result}`); 
    this.number1 = '';
    this.number2 = '';
  }

  multiply(): void{
    this.result = +this.number1 * +this.number2 + '';
    this.history.unshift(`${this.number1} X ${this.number2} = ${this.result}`);
    this.number1 = '';
    this.number2 = '';
  }

  divide(): void{
    this.result = +this.number1 / +this.number2 + '';
    this.history.unshift(`${this.number1} / ${this.number2} = ${this.result}`);
    this.number1 = '';
    this.number2 = '';
  }
}
