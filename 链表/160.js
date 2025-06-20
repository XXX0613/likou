var getIntersectionNode = function(headA, headB) {
    // 记住初始的headA,headB
    let p = headA, q = headB;
    // 处理特殊情况
    // 1.有一条为空或者两条都为空,则返回null
    // 2.俩头节点相等,任意返回其一
    if(!headA || !headB){
        return null;
    }
    if(headA === headB){
        return headA;
    }
    // 计算两条链表的长度
    let lenA = 0, lenB = 0;
    while(headA){
        lenA++;
        headA = headA.next;
    }
    while(headB){
        lenB++;
        headB = headB.next;
    }
    // 计算差值，长链表先走差值，再同时移动即可
    if(lenA>lenB){
        for(let i=lenB;i<lenA;i++){
            p = p.next;
        }    
    }else if(lenA<lenB){
        for(let i=lenA;i<lenB;i++){
            q = q.next;
        }
    }
  while(p && q){
    if (p === q){
        return p;
    }
    p = p.next;
    q = q.next;
  }
};



