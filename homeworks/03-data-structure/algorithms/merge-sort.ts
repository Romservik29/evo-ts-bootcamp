type CompareFunction<T> = (val1:T,val2:T) => 1 | 0 | -1

function mergeSort<T>(array: T[],fn: CompareFunction<T>): T[] {
    if (array.length < 2) return array
    const left = array.splice(0, array.length / 2)
    const right = array
    return merge(mergeSort(left,fn), mergeSort(right,fn),fn)
}

function merge<T>(left: T[], right: T[],fn:CompareFunction<T>): T[] {
    let arr: T[] = []
    while (left.length && right.length) {
        if (fn(left[0],right[0]) >= 1) {
            arr.push(left.shift()!)
        } else {
            arr.push(right.shift()!)
        }
    }
    return [...arr,...left, ...right]
}

export {mergeSort,merge, CompareFunction}