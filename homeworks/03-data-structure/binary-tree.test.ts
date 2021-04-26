import { BinaryTree, TreeNode, Traverse, assertNever } from "./binary-tree"

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
//               -2-1   0   1 2 
//                      1
//                  2       3
//                4   5   6   7
let binaryTree = new BinaryTree(tree)
it("create binary tree", () => {
    expect(binaryTree.rootTree).toEqual(tree)
})
it("setNewTree", () => {
    expect(binaryTree.setTree({ value: 1, left: null, right: null })).toStrictEqual(binaryTree)// not sure
    binaryTree = new BinaryTree(tree)//return origin tree
})

it("dfs", () => {
    expect(binaryTree.preorder(binaryTree.rootTree)).toStrictEqual([1, 2, 4, 5, 3, 6, 7])
    expect(binaryTree.inorder(binaryTree.rootTree)).toStrictEqual([2, 4, 5, 1, 3, 6, 7])
    expect(binaryTree.postorder(binaryTree.rootTree)).toStrictEqual([4, 5, 2, 6, 7, 3, 1])
    expect(binaryTree.preorder(null)).toStrictEqual([])
    expect(binaryTree.inorder(null)).toStrictEqual([])
    expect(binaryTree.postorder(null)).toStrictEqual([])
})
it('bfs', () => {
    expect(binaryTree.breadth(binaryTree.rootTree)).toEqual([1, 2, 3, 4, 5, 6, 7])
})

it("traverse", () => {
    expect(binaryTree.traverse(Traverse.Preorder, binaryTree.rootTree)).toStrictEqual([1, 2, 4, 5, 3, 6, 7])
    expect(binaryTree.traverse(Traverse.Inorder, binaryTree.rootTree)).toStrictEqual([2, 4, 5, 1, 3, 6, 7])
    expect(binaryTree.traverse(Traverse.Postorder, binaryTree.rootTree)).toStrictEqual([4, 5, 2, 6, 7, 3, 1])
    expect(binaryTree.traverse(Traverse.Breadth)).toEqual([1, 2, 3, 4, 5, 6, 7])
    expect(() => binaryTree.traverse({} as never)).toThrowError();
})

it("getColumn array", () => {
    expect(binaryTree.getColumn(1)).toStrictEqual([3])
    expect(binaryTree.getColumn(-1)).toStrictEqual([2])
    expect(binaryTree.getColumn(0)).toStrictEqual([1, 5, 6])
})
it("assert never", () => {
    expect(() => assertNever({} as never)).toThrowError()
})

