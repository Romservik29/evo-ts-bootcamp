enum Traverse {
  Preorder,
  Inorder,
  Postorder,
  Breadth
}
const assertNever = (arg: never): never => {
  throw new Error(`${arg}`);
};

interface Dfs<T> {
  preorder: (node: TreeNode<T>) => T[]
  inorder: (node: TreeNode<T>) => T[]
  postorder: (node: TreeNode<T>) => T[]
  breadth: (node: TreeNode<T>) => T[]
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

class BinaryTree<T> implements IBinaryTree<T>, Dfs<T> {
  rootTree: TreeNode<T>

  constructor(rootTree: TreeNode<T>) {
    this.rootTree = rootTree;
  }

  setTree(tree: TreeNode<T>): this {
    this.rootTree = tree;
    return this;
  }

  traverse(traverse: Traverse, tree = this.rootTree): T[] {
    switch (traverse) {
      case Traverse.Inorder:
        return this.inorder(tree);
      case Traverse.Postorder:
        return this.postorder(tree);
      case Traverse.Preorder:
        return this.preorder(tree);
      case Traverse.Breadth:
        return this.breadth(tree);
      default: return assertNever(traverse);
    }
  }

  preorder(node: TreeNode<T> | null): T[] {
    if (node === null) {
      return [];
    } return [node.value, ...this.preorder(node.left), ...this.preorder(node.right)];
  }

  inorder(node: TreeNode<T> | null): T[] {
    if (node === null) {
      return [];
    } return [...this.preorder(node.left), node.value, ...this.preorder(node.right)];
  }

  postorder(node: TreeNode<T> | null): T[] {
    if (node === null) {
      return [];
    } return [...this.postorder(node.left), ...this.postorder(node.right), node.value];
  }

  breadth(node: TreeNode<T>): T[] {
    const result: T[] = [];
    const queue: TreeNode<T>[] = [node];
    while (queue.length) {
      const currentNode = queue.shift();
      if (currentNode) {
        result.push(currentNode.value);
        if (currentNode.left) {
          queue.push(currentNode.left);
        }

        if (currentNode.right) {
          queue.push(currentNode.right);
        }
      }
    }
    return result;
  }

  getColumn(columnNumber: number): T[] {
    return this.getColumnNodeValue(this.rootTree, columnNumber, 0);
  }

  private getColumnNodeValue(node: TreeNode<T> | null, index: number, current: number): T[] {
    const columnValues: T[] = [];
    if (node === null) {
      return [];
    } if (index === current) {
      columnValues.push(node.value);
    }
    columnValues.push(...this.getColumnNodeValue(node.left, index + 1, current));
    columnValues.push(...this.getColumnNodeValue(node.right, index - 1, current));
    return columnValues;
  }
}

export {
  BinaryTree, IBinaryTree, TreeNode, Traverse, assertNever,
};
