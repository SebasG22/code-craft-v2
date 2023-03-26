import { CoffeeIngredient } from '../value-objects/coffee-ingredient.vo';
import { CoffeeEntity } from './coffee.entity';

describe('Coffee Entity', () => {
  it('should create an instance with an specified ID', () => {
    const capucino = CoffeeEntity.create({
      ingredients: [],
      name: 'Capuccino',
      price: 2,
    });

    expect(capucino.value.id.value).toBeTruthy();
    expect(capucino.value.price.value).toEqual(2);
    expect(capucino.value.ingredients).toEqual([]);
  });

  it('should create an instance with an specified ID', () => {
    const capucino = CoffeeEntity.create({
      ingredients: [],
      name: 'Capuccino',
      price: 2,
      id: 'capuccino',
    });

    expect(capucino.value.id.value).toContain('capuccino');
    expect(capucino.value.price.value).toEqual(2);
    expect(capucino.value.ingredients).toEqual([]);
  });

  it('should create an instance with the ingredients specified', () => {
    const ingredients = [
      { name: 'milk foam', quantity: 20 },
      { name: 'espresso', quantity: 30 },
    ];

    const coffeIngredientes = ingredients.map((ingredient) =>
      CoffeeIngredient.create(ingredient)
    );
    const capucino = CoffeeEntity.create({
      ingredients,
      name: 'Capuccino',
      price: 2,
    });

    expect(capucino.value.id.value).toBeTruthy();
    expect(capucino.value.price.value).toEqual(2);
    expect(capucino.value.ingredients).toEqual(coffeIngredientes);
  });

  it('should serialize their own value', () => {
    const ingredients = [
      { name: 'milk foam', quantity: 20 },
      { name: 'espresso', quantity: 30 },
    ];

    const capucino = CoffeeEntity.create({
      id: 'capuccino-1',
      ingredients,
      name: 'Capuccino',
      price: 2,
    });

    expect(capucino.serializeValue).toEqual({
      id: 'capuccino-1',
      ingredients,
      name: 'Capuccino',
      price: 2,
    });
  });
});
