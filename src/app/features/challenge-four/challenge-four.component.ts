import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-four',
  templateUrl: './challenge-four.component.html',
  styleUrls: ['./challenge-four.component.sass']
})
export class ChallengeFourComponent implements OnInit {
  objFood : {}[] = [{
    Name: "Spaghetti", Price: 50
  }];
  foodName: string = "";
  foodPrice: number = 0;

  numberFood: number;
  message: string;

  constructor() { }

  ngOnInit(): void {
  }

  addFood() : void {
    const name = this.foodName;
    const price = this.foodPrice;
    if(name && price && price >= 0){
      this.objFood.push({
        Name: name,
        Price: price
      });
    }
  }



}
