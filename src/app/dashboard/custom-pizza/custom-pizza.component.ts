import { Component, Output } from '@angular/core';
import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-custom-pizza',
  templateUrl: './custom-pizza.component.html',
  styleUrl: './custom-pizza.component.scss'
})
export class CustomPizzaComponent {

  bases: {name:string,priceinDollars:number,id:number,isSelected:boolean}[] = [
    {id:1,
    name:'Pan',
    priceinDollars:10.99,
  isSelected:true},
    {id:2,
      name:'Traditional',
      priceinDollars:11.99,
      isSelected:false},
      {id:3,
        name:'Gluten Free',
        priceinDollars:12.99,
        isSelected:false}
    ];
    changeOptionBase(id:number){
      this.bases.forEach((base) => {
        if(id==base.id){
          base.isSelected=true;
        }
        else{
          base.isSelected=false;
        }
    });
    }

  toppings: {name:string,priceinDollars:number,id:number,isSelected:boolean}[] =[
    {id:1,
      name:'Chicken',
      priceinDollars:1.99,
    isSelected:false},
    {id:2,
      name:'Beef',
      priceinDollars:2.99,
    isSelected:false
  },{id:3,
    name:'Bacon',
    priceinDollars:2.99,
  isSelected:true},
  {id:4,
    name:'Pineapple',
    priceinDollars:0.99,
  isSelected:true},
  {id:5,
    name:'Olives',
    priceinDollars:0.99,
  isSelected:true},
  {id:6,
    name:'Mushrooms',
    priceinDollars:0.99,
  isSelected:true},
  {id:7,
    name:'Onions',
    priceinDollars:0.99,
  isSelected:true},
  {id:8,
    name:'Bell Peppers',
    priceinDollars:0.99,
  isSelected:true},
  {id:9,
    name:'Tomatoes',
    priceinDollars:0.99,
  isSelected:true},
  {id:10,
    name:'Jalapenos',
    priceinDollars:0.99,
  isSelected:true}
  ];
  selectOptionToppings(id:number){
    this.toppings.forEach((base) => {
      if(id==base.id){
        base.isSelected=!base.isSelected;
      }
  });
  }

  sauces :{name:string,priceinDollars:number,id:number,isSelected:boolean}[]=
  [
    {id:1,
      name:'Marinara',
      priceinDollars:0.99,
      isSelected:true},
      {id:2,
        name:'Buffalo',
        priceinDollars:1.49,
        isSelected:false},
        {id:3,
          name:'BBQ',
          priceinDollars:1.49,
          isSelected:false},
          {id:4,
            name:'Alfredo',
            priceinDollars:0.99,
            isSelected:false},

    ];
    changeOptionSauces(id:number){
      this.sauces.forEach((base) => {
        if(id==base.id){
          base.isSelected=true;
        }
        else{
          base.isSelected=false;
        }
    });
    }
    cheese:{name:string,priceinDollars:number,id:number,isSelected:boolean}[]=[
      {id:1,
        name:'Light',
        priceinDollars:0.49,
        isSelected:true},
        {id:2,
          name:'Normal',
          priceinDollars:0.99,
          isSelected:false},
          {id:3,
            name:'Extra',
            priceinDollars:0.99,
            isSelected:false},
    ];
    changeOptionsCheese(id:number){
      this.cheese.forEach((base) => {
        if(id==base.id){
          base.isSelected=true;
        }
        else{
          base.isSelected=false;
        }
    });
    }
    sizes:{name:string,priceinDollars:number,id:number,isSelected:boolean}[]=[
      {id:1,
        name:'Small',
        priceinDollars:0.49,
        isSelected:true},
        {id:2,
          name:'Medium',
          priceinDollars:5.99,
          isSelected:false},
          {id:3,
            name:'Large',
            priceinDollars:0.49,
            isSelected:false}
    ];
    changeOptionsSizes(id:number){
      this.sizes.forEach((base) => {
        if(id==base.id){
          base.isSelected=true;
        }
        else{
          base.isSelected=false;
        }
    });
    }

    // @Output outputTest: new EventEmitter();


}
