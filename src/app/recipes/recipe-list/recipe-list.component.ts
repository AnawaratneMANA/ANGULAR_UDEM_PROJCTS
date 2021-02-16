import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelectd = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Pizza Recipe', 'Cheese Pizza', 'https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900'),
    new Recipe('American Lasagna Recipe', 'Chicken and Cheese', 'https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550-500x500.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelectd.emit(recipe);
  }
}
