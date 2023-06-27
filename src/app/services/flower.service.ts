import { Injectable } from '@angular/core';
import { Flower } from '../models/flower.model';

@Injectable({
  providedIn: 'root'
})
export class FlowerService {
  getFlowers(): Flower[] {
    return[
      new Flower('Snakes head','Fritillaria meleagris','✶ P3+3 A3+3 G(3)','Yes'),
      new Flower('Narcissus','Narcissus','Br ✶ ☿ P3+3+Corolla A3+3 G(3)','Yes'),
      new Flower('Indian shot','Canna indica','↯ K3 [C3 A1°–3°+½:2°] Ğ(3)','No'),
  ]
}
}
