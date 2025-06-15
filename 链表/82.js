var deleteDuplicates = function(head) {
    if (!head || !head.next) return head
    if (head.val === head.next.val) {
        while (head.next && head.next.val === head.val)  head.next = head.next.next
        return deleteDuplicates(head.next)
    }else {
       head.next = deleteDuplicates(head.next)
    }
    return head
};

