import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor() {
    this.randomColor = this.getRandomColor();
  }

  randomColor: string;
  backgroundColor: string = 'lightgrey';
  fontSize: string = '12px';

  isDisabled: boolean = false;

  ngOnInit() {
  }

  getRandomColor = (): string => {
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  setColor(event: any): void {
    console.log(event);
    this.randomColor = this.getRandomColor();
  }
}
