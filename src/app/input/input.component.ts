import { Component, OnInit } from '@angular/core';
import {matFormFieldAnimations} from '@angular/material';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  val = '';
  addToDo(val) {
    console.log(val);
    this.val = val;
    console.log(val);

  }
  constructor() { }

  ngOnInit() {
  }

}
