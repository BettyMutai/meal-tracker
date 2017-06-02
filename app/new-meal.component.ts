import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h1>New Meal</h1>
    <div>
      <label>Enter Meal Name:</label>
      <input #newName>
    </div>
    <div>
    <label>Enter Meal Calories:</label>
    <input #newCalories>
    </div>
    <div>
      <label>Enter Meal Details:</label>
      <input #newDetails>
      <button (click)="
        addClicked(newName.value, newCalories.value, newDetails.value);
        newName.value='';
        newCalories.value='';
        newDetails.value='';
      ">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, calories: number, details: string) {
    var newMealToAdd: Meal = new Meal(name, calories, details);
    this.newMealSender.emit(newMealToAdd);
  }
}
