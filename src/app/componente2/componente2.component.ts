import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  @Input ("componenteCurso") curso1C2:any;

  @Input ("contadorC2") contadorC2:any;

  constructor() { }

  ngOnInit(): void {
  }

}