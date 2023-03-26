import { Price } from './price.vo';

describe('Price VO', () => {
  it('should create a price instance', () => {
    const price = Price.create({
      value: 0,
    });

    expect(price.value).toEqual(0);
  });

  it('should throw an error when using an invalid price', () => {
    expect(() =>
      Price.create({
        value: -1,
      })
    ).toThrowError('Price should be greather or equal to 0');
  });
});
