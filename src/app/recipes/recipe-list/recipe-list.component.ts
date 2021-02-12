import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipie.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //Adding the array of  recipes
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Testing Recipe', 'https://cdn.homecrux.com/wp-content/uploads/2020/08/Jelly-Island-Cakes.jpg'),
    new Recipe('A Test Recipe', 'Testing Recipe', 'https://cdn.homecrux.com/wp-content/uploads/2020/08/Jelly-Island-Cakes.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
