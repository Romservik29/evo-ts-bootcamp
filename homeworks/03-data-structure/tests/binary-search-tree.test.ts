import { BinarySearchTree } from "../algorithms/binary-search-tree";
import { TreeNode } from "../algorithms/binary-tree";

const tree: TreeNode<number> = {
    value: 1,
    left:
    {
        value: 2,
        left: {
            value: 4,
            left: null,
            right: null
        },
        right: {
            value: 5,
            left: null,
            right: null
        },
    },
    right:
    {
        value: 3,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 7,
            left: null,
            right: null
        },
    },
}
const searchTree = new BinarySearchTree(tree)

it("has",()=>{
        expect(searchTree.has(8)).toBe(false)
        expect(searchTree.has(5)).toBe(true)
        expect(searchTree.has(5,{} as TreeNode<number>)).toBe(false)
})