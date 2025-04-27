import {LinkedList} from "./linklist.js";

const list = new LinkedList();

list.append('dog')
list.append('cat')
list.append('turtle')
list.append('fox')
list.insertAt('shark', 1)
list.removeAt(2)
console.log(list.size());

console.log(list.toString());