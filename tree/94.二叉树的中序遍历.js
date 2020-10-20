/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 中序遍历：中序遍历首先遍历左子树，然后访问根结点，最后遍历右子树。
//     若二叉树为空则结束返回，否则：
//     （1）中序遍历左子树
//     （2）访问根结点
//     （3）中序遍历右子树
// 常规递归写法
// var inorderTraversal = function(root) {
//     const result = [];
//     const inorder = function(root){
//         if(root === null) return; 
//         inorder(root.left);
//         result.push(root.val);
//         inorder(root.right);
//     };
//     inorder(root);
//     return result;
// };
// 使用栈模拟递归
// var inorderTraversal = function(root) {
//     const result = [];
//     const stack = [];
//     while(root || stack.length !== 0){
//         // 先将左子树所有内容放入栈
//         while(root){
//             stack.push(root);
//             root = root.left;
//         }
//         root = stack.pop();
//         result.push(root.val);
//         root = root.right;
//     }
//     return result;
// };
// 颜色标记法
var inorderTraversal = function(root) {
    const result = [];
    const stack = [root];
    function typeOf(o){
        return Object.prototype.toString.call(o);
    }
    while(stack.length > 0){
        let node = stack.pop();
        if(typeOf(node) === '[object Object]'){
            stack.push(node.right);
            stack.push(node.val);
            stack.push(node.left);
        }else if(typeOf(node) === '[object Number]'){
            result.push(node);
        }
    }
    return result;
};
// @lc code=end

