import { BinaryTree, TreeNode } from "./binary-tree";

export class BinarySearchTree extends BinaryTree<number>{
    constructor(rootNode: TreeNode<number>) {
        super(rootNode)
    }
    has(serachValue: number, tree: TreeNode<number> = this.rootTree):boolean {
        if (tree.value === serachValue) {
            return true
        } else {
            if(tree.left){
                const found: boolean = this.has(serachValue, tree.left)
                if(found) return found
            }
            if(tree.right){
                const found: boolean =  this.has(serachValue, tree.right)
                if(found) return found
            }
        }
        return false
    }
}