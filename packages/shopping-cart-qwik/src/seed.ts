import { CoffeeEntity } from '@code-craft/coffee-store';

export const coffee = CoffeeEntity.create({
  name: 'Cappuccino',
  ingredients: [
    { name: 'espresso', quantity: 30 },
    { name: 'steamed milk', quantity: 20 },
    { name: 'milk foam', quantity: 50 },
  ],
  price: 19,
}).serializeValue;

export const coffee2 = CoffeeEntity.create({
  name: 'Mocha',
  price: 8,
  ingredients: [
    { name: 'espresso', quantity: 30 },
    { name: 'chocolate syrup', quantity: 20 },
    { name: 'steamed milk', quantity: 25 },
    { name: 'whipped cream', quantity: 25 },
  ],
}).serializeValue;

export const coffee3 = CoffeeEntity.create({
  name: 'Mocha',
  price: 8,
  ingredients: [
    { name: 'espresso', quantity: 30 },
    { name: 'chocolate syrup', quantity: 20 },
    { name: 'steamed milk', quantity: 25 },
    { name: 'whipped cream', quantity: 25 },
  ],
}).serializeValue;

export const coffee4 = CoffeeEntity.create({
  name: 'Mocha',
  price: 8,
  ingredients: [
    { name: 'espresso', quantity: 30 },
    { name: 'chocolate syrup', quantity: 20 },
    { name: 'steamed milk', quantity: 25 },
    { name: 'whipped cream', quantity: 25 },
  ],
}).serializeValue;
