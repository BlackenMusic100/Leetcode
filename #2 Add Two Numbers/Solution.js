/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l3 = new ListNode(0);
    let current = l3;
    let carry = 0;

    while (l1 != null || l2 != null || carry != 0) {
        let x = l1 ? l1.val : 0; // Verify if l1.val is existed
        let y = l2 ? l2.val : 0; // Verify if l1.val is existed

        let sum = x + y + carry;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    return l3.next;
};



/**
 * Follow-Up Idea:
 * Using stack to make it to solve same as above func.
 */