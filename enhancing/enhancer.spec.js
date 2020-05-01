const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!

describe('testing enhancer', () => {
    describe('repair()', () => {
        it('should return durability of 100', () => {
            expect(repair({ name: 'sword', durability: 80, enhancement: 8 })).toEqual({ name: 'sword', durability: 100, enhancement: 8 })
        })
    })
    describe('succeed()', () => {
        it('should increase items enhancement by 1 if level is less than 20', () => {
            expect(succeed({ name: 'sword', durability: 80, enhancement: 8 })).toEqual({ name: 'sword', durability: 80, enhancement: 9 });
            expect(succeed({ name: 'sword', durability: 80, enhancement: 20 })).toEqual({ name: 'sword', durability: 80, enhancement: 20 })
        })
    })
})
