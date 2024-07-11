import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

 selected_pizza_choice: number = 1; 
 pizza_choices: {id:number,name:string,isselected:boolean}[] = [
  {
    id:1,
    name:'Classic Pizzas',
    isselected:true
  },{
    id:2,
    name:'Build My Own Pizza',
    isselected:false
  }
];

pizzachoiceChanged(entry: number):void{
this.selected_pizza_choice = entry;
console.log(entry);
}


}
