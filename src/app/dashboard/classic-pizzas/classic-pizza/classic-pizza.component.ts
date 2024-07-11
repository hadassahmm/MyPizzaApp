import { Component, Input } from '@angular/core';
import { Pizza } from '../../../Models/Pizza';

@Component({
  selector: 'app-classic-pizza',
  templateUrl: './classic-pizza.component.html',
  styleUrl: './classic-pizza.component.scss'
})
export class ClassicPizzaComponent {

@Input()
  pizza!:Pizza;


}
