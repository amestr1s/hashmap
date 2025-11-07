import { hashMap } from "./hm.js";

const test = new hashMap;

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.length());

test.set('apple', 'green')

console.log(test.length());

test.set('moon', 'silver')

console.log(test.length());

console.log(test.entries());

test.set('grape', 'pink')
test.set('hat', 'white')
test.set('ice cream', 'black')

console.log(test.get("hat"));

console.log(test.has("hat"));

console.log(test.remove("hat"));

console.log(test.length());

console.log(test.keys());

console.log(test.values());

console.log(test.entries());

test.clear()

console.log(test.entries());
