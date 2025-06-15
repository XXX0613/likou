var reorderList = function(head) {
    // 构造双向链表
    let p = head;
    if (p === null) return p;
    p.prev = null;
    while (p.next) {
        p.next.prev = p;
        p = p.next;
    }
    // 定义head pointer和pigu(屁股) pointer
    let hp = head;
    let pp = p;
    while (true) {
        if (pp === hp) { // 偶数结点情况终结判断
            hp.next = null;
            break;
        }
        const nexthp = hp.next;
        hp.next = pp;
        hp = nexthp; // 正链表前进
        if (pp === hp) { // 奇数结点情况终结判断
            pp.next = null;
            break;
        }
        pp.next = hp;
        pp = pp.prev; // 反链表前进
    }
};



