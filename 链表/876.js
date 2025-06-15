var middleNode = function(head) {
    let p = head,
        q = head;
    
    while (q.next != null && q.next.next != null) {
        p = p.next;
        q = q.next.next;
    }

    if (q.next == null) {
        return p;
    } else {
        return p.next;
    }    

};

