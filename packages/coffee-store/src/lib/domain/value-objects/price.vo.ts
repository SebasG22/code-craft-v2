export interface PriceValue {
  value: number;
}

export interface PriceProps {
  value: number;
}

export class Price {
  constructor(private data: PriceValue) {}
  static create(data: PriceProps) {
    if (data.value > -1) {
      return new Price(data);
    }
    throw new Error('Price should be greather or equal to 0');
  }

  get value() {
    return this.data.value;
  }

  static formatValue(value: number) {
    const nf = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    });
    return nf.format(value);
  }
}
