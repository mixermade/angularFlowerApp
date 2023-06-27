import { Component, Input, OnInit } from '@angular/core';
import { Flower } from '../models/flower.model';
import { FlowerService } from '../services/flower.service';

@Component({
  selector: 'app-flower-page',
  templateUrl: './flower-page.component.html',
  styleUrls: ['./flower-page.component.css']
})
export class FlowerPageComponent implements OnInit {
  flowers: Flower[]=[];
  @Input() name: string = '';

  constructor(protected flowerService: FlowerService){
    this.flowers = this.flowerService.getFlowers();
  }

  ngOnInit(){
    this.findDisplayValues(this.name)
  }

  findDisplayValues(name: string){
    for (let flower of this.flowers) {
      flower.selected = false;
       if (flower.name === name) {
          flower.selected = true;
       }
    }
  }
}
