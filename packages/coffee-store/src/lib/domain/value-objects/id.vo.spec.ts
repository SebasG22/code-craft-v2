import { Id } from './id.vo';

describe('ID Vo', () => {
  it('should generate an ID instance', () => {
    const id = Id.generateId();

    const value = id.value.split('-');
    expect(value[1].length).toEqual(6);
  });

  it('should create an ID instance when passing an specific Id value', () => {
    const id = Id.create('demo');

    expect(id.value).toEqual('demo');
  });

  it('should not create an ID instance when passing an invalid Id value', () => {
    expect(() => Id.create('')).toThrowError(
      'Cannot generate an Instance from an empty id'
    );
  });
});
