import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnChanges, OnInit {

  @Input() comingData = '';
  @Output() sendingData:EventEmitter<string> = new EventEmitter();
  currentValue?:number;
  previousValue?:number;
  @Input() value?:number;

  constructor() {
    console.log(this.comingData);
  }

  clickHandler() {
    this.sendingData.emit(this.comingData);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes["value"]) {
      this.currentValue = changes["value"].currentValue;
      this.previousValue = changes["value"].previousValue;
    }
  }

  ngOnInit(): void {
    console.log("About component mounted");
  }
}
