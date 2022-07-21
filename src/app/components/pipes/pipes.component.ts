import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  someText = 'TESTANDO O PIPE OPERATOR';
  meuNascimento = new Date(1985, 0, 15);
  preco = 20.99;

  constructor() { }

  ngOnInit(): void {
  }

}
