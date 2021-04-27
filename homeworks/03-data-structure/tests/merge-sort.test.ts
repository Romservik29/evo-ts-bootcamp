import { mergeSort, CompareFunction } from "../algorithms/merge-sort"

function compareFn(val1:number, val2:number):1|0|-1 {
    if(val1<val2) return 1
    else if (val1 === val2) return 0
    else return -1
}// should I test it?

it('', () => {
    expect(mergeSort([5, 7, 2, 4, 9], compareFn)).toStrictEqual([2,4,5,7,9])
    expect(mergeSort([5, 7,10, 2, 4, 9], compareFn)).toStrictEqual([2,4,5,7,9,10])
})