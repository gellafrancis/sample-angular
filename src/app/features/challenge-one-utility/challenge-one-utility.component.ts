import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NumberUtility } from './../../const/challenge-one.enum';

@Component({
  selector: 'app-challenge-one-utility',
  templateUrl: './challenge-one-utility.component.html',
  styleUrls: ['./challenge-one-utility.component.sass']
})
export class ChallengeOneUtilityComponent implements OnInit {
  private _userInput: string;
    
  @Input() set userInput(value: string) {
     this._userInput = value;
     this.result();
  }

  constructor() {}
  
  ngOnInit(): void {
    this.userInput = "0";
  }

  get userInput(): string {
    return this._userInput;
  }

  /*
  * Passed Test Case: 0, -1, 2, 10, 1000, -0
  *
  * 
  */

  private result() : string{
  if(this.userInput){
    if(+this.userInput >= 0 && this.userInput !== "-0" ){
      return this.answer(this.userInput);
    } 
    else if(+this.userInput < 0){
      const convertUserInput = this.userInput.replace("-", "");
      return "-".concat(this.answer(convertUserInput));
    }
  }
  return "Invalid input!"
  }

  get finalAnswer() : string{
    return this.result();
  }

  private answer(_userInput: string): string{
    const arrNumber: string[] = _userInput.split(".");
    const numZeros: number =  NumberUtility.minimumIntegerLength - arrNumber[0].length;
    const zeros = this.getAddZeros(numZeros);
    return zeros.concat(_userInput); 
  }

  private getAddZeros(numberOfZeros: number) : string{
    let zeros = "";
    for(let i = 0; i <= numberOfZeros; i++){
      zeros += "0";
    }
    return zeros;
  }
}
