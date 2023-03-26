export interface QuantityValue {
  quantity: number;
}

export interface QuantityProps {
  quantity: number;
}

export class Quantity {
  constructor(private data: QuantityValue) {}

  public static create(data: QuantityProps) {
    if (data.quantity > -1) {
      return new Quantity({ quantity: data.quantity });
    }

    throw new Error('Quantity should be greather or equal to 0');
  }

  get value() {
    return this.data.quantity;
  }
}
