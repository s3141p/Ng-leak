import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
})
export class BComponent implements OnInit {
  data: number[] = [];
  isVisible = true;

  constructor() {
    for (let i = 0; i < 1000000; i++) {
      this.data.push(i);
    }
  }

  doNothing() {}

  ngOnInit(): void {}
}
