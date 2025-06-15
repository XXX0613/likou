var addTwoNumbers = function(l1, l2) {
    if(!l1 || !l2) return null;
    let arr1 = [],
        arr2 = [],
        sum = '',
        data = new ListNode( null );
        p = data
    while (l1 !== null) {
        arr1.push(l1.val)
        l1 = l1.next;
    }
    while (l2 !== null) {
        arr2.push(l2.val)
        l2 = l2.next;
    }
    sum = String(BigInt(arr1.join('')) + BigInt(arr2.join(''))).split('')
    for(let i = 0; i < sum.length; i++) {
        p.next = new ListNode(BigInt(sum[i]));
        p = p.next
    }
    return data.next
};



