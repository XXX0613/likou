var deleteDuplicates = function(head) {
  const listNode = new ListNode(0)
  listNode.next = head
  let cur = listNode.next
  while (cur) {
    let next = cur.next
    while (next && next.val === cur.val) {
      next = next.next
    }
    cur.next = next
    cur = cur.next
  }
  return listNode.next
}

