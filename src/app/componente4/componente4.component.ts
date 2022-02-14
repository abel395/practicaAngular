import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component implements OnInit {

  constructor() { 
    console.log('Creación componente 4');
  }

  ngOnInit(): void {
    console.log('Inicializado el componente 4');
  }

}
