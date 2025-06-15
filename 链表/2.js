var addTwoNumbers = function (l1, l2) {
  if (!l1 && !l2) return null
  // 链表头
  let head = null
  // 当前链表位置
  tail = null
  // 存放当前计算的值
  let sum = 0
  // 存放进位
  let remainder = 0

  while (l1 || l2) {
    //  取读链表中当前位置的值(指针)
    let n1 = l1 ? l1.val : 0
    let n2 = l2 ? l2.val : 0
    // 计算
    sum = n1 + n2 + remainder
    // 计算进位(满十进一)
    remainder = Math.floor(sum / 10)
    // 存入计算的值(取个位)
    if (!head) {
      // 链表头
      head = tail = new ListNode(sum % 10)
    } else {
      // 链表向下链接
      tail.next = new ListNode(sum % 10)
      // 更新链表位置(指针++)
      tail = tail.next
    }
    // 更新链表位置(指针++)
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }

  // 存在进位 则链表下一项进一位
  if (remainder) tail.next = new ListNode(1)

  return head
}

