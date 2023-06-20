import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  public url = 'https://youtu.be/rlVxG2lG1Tk?list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G'
  public urlImage = 'http://lorempixel.com.br/500/400/nature'

  public curtirCurso: boolean = true;

  public getValor(){
    return 1;
  }


  constructor() { }

  ngOnInit(): void {
  }

  public trocarVariavel(): void{
    this.curtirCurso = !this.curtirCurso;
  }

}
