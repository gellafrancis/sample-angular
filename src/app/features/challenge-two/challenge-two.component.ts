import { Component, OnInit } from '@angular/core';
import { CurrencyList } from 'src/app/const/challenge-two.enum';

@Component({
  selector: 'app-challenge-two',
  templateUrl: './challenge-two.component.html',
  styleUrls: ['./challenge-two.component.sass']
})
export class ChallengeTwoComponent implements OnInit {
  money: number = 0;
  currency: string = "";
  currencies: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadCurrencies();
  }

  onKeyMoney(e){
    this.money = e.target.value;
  }

  onSelectCurrency(e){
    this.currency = e.target.value;
  }

  private loadCurrencies() : void{
    for (let suit in CurrencyList) {
      const currency: CurrencyList = CurrencyList[suit];
      this.currencies.push(currency);
    }
  }

}
