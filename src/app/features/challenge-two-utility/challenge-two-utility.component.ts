import { Component, Input, OnInit } from '@angular/core';
import { CurrencyList } from 'src/app/const/challenge-two.enum';

@Component({
  selector: 'app-challenge-two-utility',
  templateUrl: './challenge-two-utility.component.html',
  styleUrls: ['./challenge-two-utility.component.sass']
})
export class ChallengeTwoUtilityComponent implements OnInit {

  private _userInputMoney: string;
  private _userInputCurrency: string;
  
  finalAnswer: string = "";
  currencies: string[];

  @Input() set userInputMoney(value: string) {
     this._userInputMoney = value;
     this.answer();
  }

  @Input() set userInputCurrency(value: string) {
    this._userInputCurrency = value;
    this.answer();
 }

  constructor() { }

  get userInputMoney(): string {
    return this._userInputMoney;
  }

  get userInputCurrency(): string {
    return this._userInputCurrency;
  }

  ngOnInit(): void {
    this.userInputMoney = "0";
    this.userInputCurrency = "USD";
    this.answer();
  }

  private answer() : void{
    this.finalAnswer = this.triggerResultLogic();
  }

  private triggerResultLogic(): string{
    if(this._userInputMoney && this._userInputCurrency){
      return (+this._userInputMoney).toFixed(2).toString() + " " + this._userInputCurrency;
    }
    return "Invalids input!"
  }


}
