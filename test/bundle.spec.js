'use strict';

const sort = (array) => [...array].sort();

describe('Array sorting', () => {
    it('is correct for numbers ', () => {
        const numberArray = [4,5,2,7,1,4];
        const sortedArray = sort(numberArray);
        expect(sortedArray).toEqual([1,2,4,4,5,7]);
    });

    it('is correct for strings ', () => {
        const strArray = ['q', 'd', 'x', 'o', 'c'];
        const sortedArray = sort(strArray);
        expect(sortedArray).toEqual(['c', 'd', 'o', 'q', 'x']);
    });

    it('is immutable', () => {
        const numberArray = [4,5,2,7,1,4];
        const numberArrayClone = [...numberArray];
        sort(numberArray);
        expect(numberArray).toEqual(numberArrayClone);
    });
});
