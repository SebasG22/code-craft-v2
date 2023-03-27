import { ShoppingCartEntity } from './shopping-cart.entity';
import { CoffeeEntity } from './coffee.entity';

const capuccino = CoffeeEntity.create({
  ingredients: [],
  name: 'Cappuccino',
  price: 2,
  id: 'demo-capuccino',
});

const mocha = CoffeeEntity.create({
  ingredients: [],
  name: 'Mocha',
  price: 5,
  id: 'demo-mocha',
});

describe('Shopping Cart Entity', () => {
  it('should create an instance with an specified ID', () => {
    const cart = ShoppingCartEntity.create({
      items: [],
      id: 'demo-test',
    });

    expect(cart.value.id.value).toContain('demo-test');
    expect(cart.value.items).toEqual([]);
  });

  it('should create an instance and asssign a generated ID', () => {
    const cart = ShoppingCartEntity.create({
      items: [],
    });

    expect(cart.value.id.value).toBeTruthy();
    expect(cart.value.items).toEqual([]);
  });

  it('should create an instance with the specified items', () => {
    const items = [
      {
        type: capuccino,
        quantity: 5,
      },
      {
        type: mocha,
        quantity: 2,
      },
    ];

    const cart = ShoppingCartEntity.create({
      items,
    });

    expect(cart.value.id.value).toBeTruthy();
    expect(cart.value.items.length).toEqual(2);
    expect(cart.value.items[0]).toEqual(items[0]);
    expect(cart.value.items[1]).toEqual(items[1]);
  });

  it('should serialize their own value', () => {
    const items = [
      {
        type: capuccino,
        quantity: 5,
      },
    ];

    const cart = ShoppingCartEntity.create({
      id: 'cart-1',
      items,
    });

    expect(cart.serializeValue).toEqual({
      id: 'cart-1',
      items: [
        {
          type: {
            ingredients: [],
            name: 'Cappuccino',
            price: '$2.00',
            id: 'demo-capuccino',
          },
          quantity: 5,
          totalPerItem: '$10.00',
        },
      ],
      totalItems: 5,
      totalPrice: '$10.00',
    });
  });
});
