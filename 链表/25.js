/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let n=0
    let node=head
    // 计算链表的长度
    while(node){
        n+=1
        node=node.next
    }
    // 创建虚拟头节点
    let dummy=new ListNode(0,head)
    let p0=dummy,prev=null,cur=p0.next,temp=null
    while(n>=k){
        let start=cur// 记录原反转部分的头节点，反转后将成为尾节点
        for(let i=0;i<k;i++){
            temp=cur.next
            cur.next=prev
            prev=cur
            cur=temp
        }
        //p0.next指向反转后的部分的头节点
        p0.next=prev
        start.next=cur//原反转部分的尾节点指向cur,即下一组的头节点
        //更新p0伪反转部分的尾节点
        p0=start
        //减少剩余节点数量
        n-=k
    }
    //返回虚拟头节点的next,即反转后的链表头
    return dummy.next
};

