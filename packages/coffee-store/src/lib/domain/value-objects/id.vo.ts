export interface IdValue {
  value: string;
}

export interface IdProps {
  value: string;
}

export class Id {
  constructor(private data: IdValue) {}

  static generateId() {
    const timestamp = Date.now().toString(36);
    const randomNum = Math.random().toString(36).substring(2, 8);

    return new Id({
      value: `${timestamp}-${randomNum}`,
    });
  }

  get value(){
    return this.data.value;
  }
}
