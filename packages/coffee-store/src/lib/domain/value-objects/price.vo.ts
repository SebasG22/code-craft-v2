export interface PriceValue {
  value: number;
}

export interface PriceProps {
  value: number;
}

export class Price {
  constructor(private data: PriceValue) {}
  static create(data: PriceProps) {
    return new Price(data);
  }

  get value(){
    return this.data.value;
  }
}
