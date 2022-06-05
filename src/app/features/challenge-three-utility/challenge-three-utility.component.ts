import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-challenge-three-utility',
  templateUrl: './challenge-three-utility.component.html',
  styleUrls: ['./challenge-three-utility.component.sass']
})
export class ChallengeThreeUtilityComponent implements OnInit {
  private _btnMode: boolean;
  buttonMode : boolean;
    
  @Input() set btnMode(value: boolean) {
     this._btnMode = value;
     this.changeBtnMode();
  }
  @Output() modeEvent = new EventEmitter<string>();

  constructor() {}
  
  ngOnInit(): void {}

  get btnMode(): boolean {
    return this._btnMode;
  }

  changeBtnMode() : void {
    this.buttonMode = true;
  }

  childSendMode() {
    const mode = this.buttonMode ? "T" : "F";
    this.modeEvent.emit(mode);
  }

}
