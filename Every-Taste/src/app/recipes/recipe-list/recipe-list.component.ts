import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] =[
    new Recipe('A test recipe','This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/4/48/Ugali_%26_Sukuma_Wiki.jpg'),
    new Recipe('The best recipe','This is simply the best',
      'https://upload.wikimedia.org/wikipedia/commons/4/48/Ugali_%26_Sukuma_Wiki.jpg')
  ];
@Output() recipeWasSelected = new EventEmitter<Recipe>();
  onRecipeSelected(recipe:Recipe){
 this.recipeWasSelected.emit(recipe);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
