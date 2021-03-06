import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService{
  ingredientsChange = new EventEmitter<Ingredient[]>();
  private ingredients:Ingredient[] = [
    new Ingredient('Apples',6),
    new Ingredient('Tomatoes',4),
    new Ingredient('Onions',2)
  ];
  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChange.emit(this.ingredients.slice());
  }
  addIngredients(ingredients:Ingredient[]){
     this.ingredients.push(...ingredients);
     this.ingredientsChange.emit(this.ingredients.slice());
  }
}
