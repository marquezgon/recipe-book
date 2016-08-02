import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from "../recipe";
import {RecipeItemComponent} from "./recipe-item.component";

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe: Recipe = new Recipe('Dummy', 'Dummy', 'http://previewcf.turbosquid.com/Preview/2014/07/04__08_44_44/shop%20dummy1.jpgd52a5608-9179-4c76-87dc-195bcdfe5f4bLarge.jpg');

  constructor() {}

  ngOnInit() {
  }

  onSelected(recipe:Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
