import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-one',
  templateUrl: './challenge-one.component.html',
  styleUrls: ['./challenge-one.component.sass']
})
export class ChallengeOneComponent implements OnInit {
  input1: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onKey(e){
    this.input1 = e.target.value;
  }

  

}
