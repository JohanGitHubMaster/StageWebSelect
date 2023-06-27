import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-selectcomponent',
  templateUrl: './selectcomponent.component.html',
  styleUrls: ['./selectcomponent.component.css']
})
export class SelectcomponentComponent {
  toppings = new FormControl('');

  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];
}
