var partition = function(head, x) {
    if(head === null) return head;
    //大于x节点的头部
    let bstart = 0;
    //小于x节点的头部
    let lstart = 0;
    //大于x节点的当前节点
    let big = 0;
    //小于x节点的当前节点
    let lit = 0;
    //遍历
    while(head){
        if(head === null) {
            break;
        }
        //保存剩余节点
        let next = head.next;
        //小于x时
        if(head.val < x){
            //如果已有小于x的节点
            if(lstart){
                lit.next = head;
                lit = lit.next;
            //如果没有小于x的节点，重置lstart起点 和 lit当前点
            }else{
                lstart = head;
                lit = head;
            }
        }else{
            if(bstart){
                big.next = head;
                big = big.next;
            }else{
                bstart = head;
                big = head;
            }
        }
        head = next;
    }
    lit.next = null;
    big.next = null;
    //将小于x的节点末尾指向大于x节点的头部
    if(lit && bstart) lit.next = bstart;
    if(lstart) return lstart;
    return bstart;
};


