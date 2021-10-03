import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  ingredients:Ingredient[] = [
    new Ingredient('Apples',6),
    new Ingredient('Tomatoes',4),
    new Ingredient('Onions',2)
  ];
  onIngredientAdded(ingredient:Ingredient){
     this.ingredients.push(ingredient);
  }

}
