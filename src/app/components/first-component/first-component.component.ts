import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Jean Fernandine';     //interpolação
  age: number = 37;
  job: string = 'Programmer';
  hobbies = ['correr', 'estudar', 'jogar'];
  car = {
    name:'Polo',
    year: '2021',
  };


  constructor() { }

  ngOnInit(): void {
  }

}
