import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService{
  constructor(private shoppingListService:ShoppingListService) {
  }
  recipeSelected = new EventEmitter<Recipe>();
  private recipes:Recipe[] =[
    new Recipe('A test recipe','This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/4/48/Ugali_%26_Sukuma_Wiki.jpg',
      [new Ingredient('Meat',1),new Ingredient('French fries',10)]),
    new Recipe('The best recipe','This is simply the best',
      'https://www.publicdomainpictures.net/pictures/290000/nahled/hamburger-lunch.jpg',
      [new Ingredient('Buns',5),new Ingredient('Onion',2)])
  ];
  getRecipes(){
    return this.recipes.slice();
  }
  getRecipe(index:number){
    return this.recipes[index];
  }
  addIngeToShoList(ingredients:Ingredient[]){
     this.shoppingListService.addIngredients(ingredients);
  }
}
