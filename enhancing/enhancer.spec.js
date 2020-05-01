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
    describe('fail()', () => {
        it('should decrease item durability by 5 if the items enhancement is less than 15', () => {
            expect(fail({ name: 'sword', durability: 80, enhancement: 8 })).toEqual({ name: 'sword', durability: 75, enhancement: 8 });
        })
        it('should decrease item durability by 10 if the items enhancement is 15 or more', () => {
            expect(fail({ name: 'sword', durability: 80, enhancement: 15})).toEqual({ name: 'sword', durability: 70, enhancement: 15 });
        })
        it('should decrease item enhancement by 1 if item is greater than 16', () => {
            expect(fail({ name: 'sword', durability: 80, enhancement: 17})).toEqual({ name: 'sword', durability: 70, enhancement: 16 });
            expect(fail({ name: 'sword', durability: 80, enhancement: 18})).toEqual({ name: 'sword', durability: 70, enhancement: 17 });
        })
    })
    describe('get()', () => {
        it('should add the enhancement level of them item inside brackets after a + sign prior to the items name if enhancement level is greater than 0', () => {
            expect(get({ name: 'sword', durability: 80, enhancement: 0})).toEqual({ name: 'sword', durability: 80, enhancement: 0 });
            expect(get({ name: 'sword', durability: 80, enhancement: 17})).toEqual({ name: '[+17]sword', durability: 80, enhancement: 17 });
        })
    })
})
