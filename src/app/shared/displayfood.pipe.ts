import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayfood'
})
export class DisplayfoodPipe implements PipeTransform {
  transform(food: any, numberOfFood: number): string {
    let listOfFood = "";
    for(let item = 0; item < numberOfFood; item++){
      if(food[item]){
        const foodName = food[item]?.Name;
        listOfFood += foodName + ", "
      }
    }
    listOfFood = listOfFood.slice(0, -2);
    return listOfFood;
  }
}
