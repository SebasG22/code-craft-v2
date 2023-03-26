import { CoffeeIngredient } from "./coffee-ingredient.vo";

describe('Coffee Ingredient', ()=>{
    it('should create a coffee ingredient', ()=>{
        const ingredient = CoffeeIngredient.create({
            name: 'milk',
            quantity:1
        });

        expect(ingredient.value.name).toEqual('milk');
        expect(ingredient.value.quantity.value).toEqual(1);
    });

    it('should throw and error when value is invalid', ()=>{

        expect(() => CoffeeIngredient.create({
            name: 'mil',
            quantity:1
        })).toThrowError("Coffee Name does not met the requirements: (4) Characters at least")
    });
});