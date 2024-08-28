function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function sortedInsert(head, data) {
  if (head === null || data < head.data) return new Node(data, head);
  head.next = sortedInsert(head.next, data);
  return head;
}
