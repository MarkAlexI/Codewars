function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function insertNth(head, index, data, deep = 1) {
  let newNode = new Node(data), currNode = head;

  if (index === 0) return new Node(data, head);

  while (deep++ < index) currNode = currNode.next;

  newNode.next = currNode.next;
  currNode.next = newNode;

  return head;
}
