function Node(data) {
  this.data = data;
  this.next = null;
}
const append = (listA, listB) => listA ? (listA.next = append(listA.next, listB), listA) : listB;
