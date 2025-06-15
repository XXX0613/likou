var oddEvenList = function(head) {
  if (!(head && head.next)) return head;
  
  const head2 = head.next;
  let node1 = head;
  head.next = null;
  let node2 = head2;

  while (node2) {
    let node2Next = node2.next;
    node2.next && (node2.next = node2.next.next);

    node1.next = node2Next;
    if(node1.next) {
      node1.next.next = null;
      node1 = node1.next;
    }
    node2 = node2.next;
  }
  node1.next = head2;
  return head;
};

