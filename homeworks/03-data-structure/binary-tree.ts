enum Traverse {
    Inorder,
    Preorder,
    Postorder,
    Breadth
}
const assertNever = (arg: never): never => {
    throw new Error();
}

interface TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
}
interface IBinaryTree<T> {
    setTree(tree: TreeNode<T>): this;
    traverse(travesrse: Traverse): T[];
    getColumn(columnOrder: number): T[];
}

class BinaryTree<T> implements IBinaryTree<T>{
    rootTree: TreeNode<T>
    constructor(rootTree: TreeNode<T>) {
        this.rootTree = rootTree
    }

    setTree(tree: TreeNode<T>): this {
        this.rootTree = tree
        return this
    }

    traverse(traverse: Traverse, tree = this.rootTree): T[] {
        switch (traverse) {
            case Traverse.Inorder:
                return this.inorder(tree)
            case Traverse.Postorder:
                return this.postorder(tree)
            case Traverse.Preorder:
                return this.preorder(tree)
            case Traverse.Breadth:
                return []
            default: return assertNever(traverse)
        }
    }
    preorder(node: TreeNode<T> | null): T[] {
        if (node === null) {
            return [];
        } else
            return [...this.preorder(node.left), node.value, ...this.preorder(node.right)];
    }
    inorder(node: TreeNode<T>): T[] {
        if (node === null) {
            return [];
        } else
            return [node.value, ...this.preorder(node.left), ...this.preorder(node.right)];
    }

    postorder(node: TreeNode<T> | null): T[] {
        if (node === null) {
            return []
        } else
            return [...this.postorder(node.left), ...this.postorder(node.right), node.value]
    }
    getColumn(columnNumber: number): T[] {
        return this.getColumnNodeValue(this.rootTree, columnNumber, 0)
    }
    private getColumnNodeValue(node: TreeNode<T> | null, index: number, current: number): T[] {
        let columnValues: T[] = []
        if (node === null) {
            return []
        } else if (index === current) {
            columnValues.push(node.value)
        }
        columnValues.push(...this.getColumnNodeValue(node.left, index + 1, current))
        columnValues.push(...this.getColumnNodeValue(node.right, index - 1, current))
        return columnValues
    }
}