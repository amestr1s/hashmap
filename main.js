import { hashMap } from "./hm.js";
import { hashSet } from "./hs.js";

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


const setTest = new hashSet;

setTest.add('apple')
setTest.add('banana')
setTest.add('carrot')
setTest.add('dog')
setTest.add('elephant')
setTest.add('frog')
setTest.add('grape')
setTest.add('hat')
setTest.add('ice cream')
setTest.add('jacket')
setTest.add('kite')
setTest.add('lion')

console.log(setTest.length());

setTest.add('apple')

console.log(setTest.length());

setTest.add('moon')

console.log(setTest.length());

console.log(setTest.keys());

setTest.add('grape')
setTest.add('hat')
setTest.add('ice cream')

console.log(setTest.has("hat"));

console.log(setTest.length());

console.log(setTest.remove("hat"));

console.log(setTest.length());

console.log(setTest.keys());

setTest.clear()

console.log(setTest.keys());