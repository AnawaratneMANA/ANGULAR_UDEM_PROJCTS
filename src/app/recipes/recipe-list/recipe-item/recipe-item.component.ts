import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // Variables
  @Input() public object1: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();


  constructor() {
  }

  ngOnInit() {
  }

  onItemClick( ) {
    this.recipeSelected.emit();
  }
}
