import { Component } from '@angular/core';
import { Flower } from '../models/flower.model';
import { FlowerService } from '../services/flower.service';

@Component({
  selector: 'app-flower-list-main',
  templateUrl: './flower-list-main.component.html',
  styleUrls: ['./flower-list-main.component.css']
})
export class FlowerListMainComponent {
  searchValue: string = "";
  name: string = "";
  latname: string = "";
  formula: string = "";
  poison: string = "";
  flowers: Flower[]=[];

  constructor(protected flowerService: FlowerService){
    this.flowers = this.flowerService.getFlowers();
  }

  addFlower(name: string, latname: string, formula: string, poison: string): void {     
    if(name && latname && formula && poison){
      this.flowers.push(new Flower(name, latname, formula, poison));
    }  
}
  searchInArray(searchValue: string) {
  for (let flower of this.flowers) {
    flower.selected = false;
     if (flower.name === searchValue) {
        flower.selected = true;
     }
  }
}
  flushList() : void{
  while(this.flowers.length != 0){
    this.flowers.pop();
  }
}
}
