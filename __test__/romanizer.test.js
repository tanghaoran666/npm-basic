import {transform} from "../src/romanizer";

describe('romanizer', () => {
    it('should return X when given 10', () => {
        const transformed = transform(10);

        expect(transformed).toEqual("X");
    });

});