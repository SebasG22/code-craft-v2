import { Quantity } from './quantity.vo';

describe('Quantity VO', ()=>{
    it('should create a quantity instance', ()=>{
        const quantity = Quantity.create({
            quantity: 20
        });

        expect(quantity.value).toEqual(20);
    });

    it('should throw an error when value is invalid', ()=>{
        
        expect(() => Quantity.create({
            quantity: -1
        })).toThrowError("Quantity should be greather or equal to 0")
    });

    
});