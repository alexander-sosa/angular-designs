import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puntos',
  templateUrl: './puntos.component.html',
  styleUrls: ['./puntos.component.css']
})
export class PuntosComponent implements OnInit {
  distributedPuntos:any = [[]];
  puntos = ["Punto uno", "Punto dos superrequetelargosupinshinombre", "punto tres","Punto uno", "Punto dos superrequetelargosupinshinombre"];
  
  ngOnInit(): void {
    this.computeDistributedPuntos(this.puntos, 3);
    console.log(this.distributedPuntos);
  }

  computeDistributedPuntos(arr: any, itemsPerRow: number){
    let R = [];
    for(let i = 0, len = arr.length; i<len; i+=itemsPerRow){
      R.push(arr.slice(i, i+itemsPerRow));
    }
    this.distributedPuntos = R;
  }
}
