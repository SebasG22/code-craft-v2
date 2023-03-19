import { Id } from "./id.vo";

describe('ID Vo', ()=>{
    it('should generate an ID instance', ()=>{
        const id = Id.generateId();

        expect(id.value).toContain('-')
    });

    it('should create an ID instance when passing an specific Id value', ()=>{
        const id = Id.create("demo");

        expect(id.value).toContain('demo-');
    });

    it('should not create an ID instance when passing an invalid Id value', ()=>{
        expect(() => Id.create("")).toThrowError("Cannot generate an Instance from an empty id")
    })
});