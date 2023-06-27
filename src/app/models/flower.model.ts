export class Flower {
    name: string;
    latname: string;
    formula: string;
    poison: string;
    selected?: boolean;
   
  constructor(name: string, latname: string, formula: string, poison: string) {

      this.name = name;
      this.latname = latname;
      this.formula = formula;
      this.poison = poison;
  }
}
