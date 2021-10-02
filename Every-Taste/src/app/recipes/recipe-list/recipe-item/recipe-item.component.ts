import { Component, OnInit } from '@angular/core';

import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  recipes:Recipe[] =[
    new Recipe('A test recipe','This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/4/48/Ugali_%26_Sukuma_Wiki.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
