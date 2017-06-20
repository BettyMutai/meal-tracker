import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div *ngFor="let currentMeal of childMealList | completeness:selectedCompleteness">
      <h3>{{ currentMeal.name }}</h3>
      <p>{{ currentMeal.calories }}</p>
      <p>{{ currentMeal.details }}</p>
      <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
    </div>
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="less">Below 500</option>
      <option value="more">Above 500</option>
      <option value="all" selected="selected">View All</option>
    </select>
    <tr><td></td><td>Total Calories:</td>
  <td>{{getTotal()}}</td>
  <td></td></tr>
  <tr><td></td><td>Average Calories:</td>
    <td>{{getAverage()}}</td>
    <td></td></tr>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender= new EventEmitter();
  getTotal(){
   var total:number=0;
   for (var i =0;i<this.childMealList.length;i++){
     var currentCalorie:number = this.childMealList[i].calories;
     total +=currentCalorie;
   }
   return total;
 }
 getAverage(){
   var average:number=0;
   var total = this.getTotal();
   average=total/this.childMealList.length;
   return average;
 }
 public selectedCompleteness: string = "all";
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
  editButtonHasBeenClicked(mealToEdit: Meal){
    this.clickSender.emit(mealToEdit);
  }
}
