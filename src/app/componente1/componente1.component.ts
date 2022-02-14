import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
  curso1:any={nombre:'Beca Angular', total_dias:9, descripcion:'Curso sobre Angular y TypeScript'};
  curso2:any={nombre:'Beca Java', total_dias:10, descripcion:'Formación sobre Java'};
  contador:number = 0;
  constructor() {
    
   }

   eventoBoton(){
    this.contador = this.contador + 1;

    let auxCursoNombre = this.curso1.nombre;
    let auxCursoDesc = this.curso1.descripcion;

    this.curso1.nombre=this.curso2.nombre;
    this.curso1.descripcion=this.curso2.descripcion;

    this.curso2.nombre=auxCursoNombre;
    this.curso2.descripcion=auxCursoDesc;

    console.log('entrando en funcion intercambiar');
   }

  ngOnInit(): void {
  }

}
