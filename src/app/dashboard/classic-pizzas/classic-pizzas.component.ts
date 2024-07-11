import { Component } from '@angular/core';
import { Pizza } from '../../Models/Pizza';

@Component({
  selector: 'app-classic-pizzas',
  templateUrl: './classic-pizzas.component.html',
  styleUrl: './classic-pizzas.component.scss'
})
export class ClassicPizzasComponent {

  pizzas: Pizza[] = 
  [{
   id: 1, 
   pizzaName: "Margherita",
   toppings: ["Tomato", "Mozzarella", "Basil"],
   description: "Classic Italian pizza with fresh tomato sauce, mozzarella cheese, and basil leaves.",
   isitVegetarian: true,
   priceInDollars: 8.99,
   imageURL: 'images/pizza1.jpg'
 },
 {
   id: 2,
   pizzaName: "Pepperoni",
   toppings: ["Tomato", "Mozzarella", "Pepperoni"],
   description: "Popular pizza topped with spicy pepperoni slices and mozzarella cheese.",
   isitVegetarian: false,
   priceInDollars: 9.99,
   imageURL: 'images/pizza2.jpg'
 },
 {
   id: 3,
   pizzaName: "BBQ Chicken",
   toppings: ["BBQ Sauce", "Chicken", "Red Onions", "Cilantro"],
   description: "Savory pizza with BBQ sauce, grilled chicken, red onions, and fresh cilantro.",
   isitVegetarian: false,
   priceInDollars: 11.99,
   imageURL: 'images/pizza3.jpg'
 },
 {
   id: 4,
   pizzaName: "Veggie Supreme",
   toppings: ["Tomato", "Mozzarella", "Bell Peppers", "Olives", "Mushrooms", "Onions"],
   description: "Loaded with fresh vegetables including bell peppers, olives, mushrooms, and onions.",
   isitVegetarian: true,
   priceInDollars: 10.99,
   imageURL: 'images/pizza4.jpg'
 },
 {
   id: 5,
   pizzaName: "Hawaiian",
   toppings: ["Tomato", "Mozzarella", "Ham", "Pineapple"],
   description: "Sweet and savory combination of ham and pineapple with mozzarella cheese.",
   isitVegetarian: false,
   priceInDollars: 10.49,
   imageURL: 'images/pizza5.jpg'
 },
 {
   id: 6,
   pizzaName: "Four Cheese",
   toppings: ["Tomato", "Mozzarella", "Parmesan", "Gorgonzola", "Ricotta"],
   description: "Cheese lover's delight with a blend of four different cheeses.",
   isitVegetarian: true,
   priceInDollars: 12.49,
   imageURL: 'images/pizza6.jpg'
 },
 {
   id: 7,
   pizzaName: "Meat Lovers",
   toppings: ["Tomato", "Mozzarella", "Pepperoni", "Sausage", "Bacon", "Ham"],
   description: "Hearty pizza loaded with a variety of meats including pepperoni, sausage, bacon, and ham.",
   isitVegetarian: false,
   priceInDollars: 13.99,
   imageURL: 'images/pizza7.jpg'
 },
 {
   id: 8,
   pizzaName: "Buffalo Chicken",
   toppings: ["Buffalo Sauce", "Chicken", "Mozzarella", "Blue Cheese"],
   description: "Spicy and tangy buffalo sauce with grilled chicken, mozzarella, and blue cheese crumbles.",
   isitVegetarian: false,
   priceInDollars: 11.99,
   imageURL: 'images/pizza8.jpg'
 },
 {
   id: 9,
   pizzaName: "Mushroom & Spinach",
   toppings: ["Tomato", "Mozzarella", "Mushrooms", "Spinach", "Garlic"],
   description: "Healthy and flavorful pizza with fresh mushrooms, spinach, and garlic.",
   isitVegetarian: true,
   priceInDollars: 10.99,
   imageURL: 'images/pizza9.jpg'
 },
 {
   id: 10,
   pizzaName: "Pesto",
   toppings: ["Pesto Sauce", "Mozzarella", "Cherry Tomatoes", "Basil"],
   description: "Delicious pesto sauce with mozzarella cheese, cherry tomatoes, and fresh basil.",
   isitVegetarian: true,
   priceInDollars: 11.49,
   imageURL: 'images/pizza10.jpg'
 },
 {
   id: 11,
   pizzaName: "Sausage & Peppers",
   toppings: ["Tomato", "Mozzarella", "Italian Sausage", "Bell Peppers"],
   description: "Classic combination of Italian sausage and bell peppers with mozzarella cheese.",
   isitVegetarian: false,
   priceInDollars: 10.99,
   imageURL: 'images/pizza11.jpg'
 },
 {
   id: 12,
   pizzaName: "Caprese",
   toppings: ["Tomato", "Mozzarella", "Cherry Tomatoes", "Basil", "Balsamic Glaze"],
   description: "Inspired by the Caprese salad, this pizza includes cherry tomatoes, mozzarella, basil, and a drizzle of balsamic glaze.",
   isitVegetarian: true,
   priceInDollars: 12.99,
   imageURL: 'images/pizza12.jpg'
 }
]
  
}
