import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-three',
  templateUrl: './challenge-three.component.html',
  styleUrls: ['./challenge-three.component.sass']
})
export class ChallengeThreeComponent implements OnInit {
  mode: boolean = false;

  constructor() { }

  ngOnInit(): void {}

}
