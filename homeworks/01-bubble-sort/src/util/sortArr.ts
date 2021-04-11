export type arrForSort = { arr: number[], finished?: boolean }
export const stepSortArr = (array: arrForSort): arrForSort => {
    const { arr } = array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            const temp: number = arr[i + 1]
            arr[i + 1] = arr[i];
            arr[i] = temp
            return {  arr }
        }
    }
    return { arr: arr, finished:true }
}