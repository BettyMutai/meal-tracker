import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div *ngFor="let currentMeal of childMealList">
      <h3>{{ currentMeal.name }}</h3>
      <p>{{ currentMeal.calories }}</p>
      <p>{{ currentMeal.details }}</p>
      <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender= new EventEmitter();
  editButtonHasBeenClicked(mealToEdit: Meal){
    this.clickSender.emit(mealToEdit);
  }
}
