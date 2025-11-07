import { linkedList } from "./ll.js";

class hashMap {
    constructor (capacity = 16, loadFactor = 0.75){
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.buckets = new Array(capacity);
        this.keyCount = 0;
    }

    hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
    }
    
    set(key, value){
        let index = this.hash(key);

        if (this.buckets[index] === null || this.buckets[index] === undefined){
            let list = new linkedList;
            list.append({ key: key, value: value });
            this.buckets[index] = list;
            this.keyCount++;
            if ((this.keyCount / this.capacity) >= this.loadFactor){
                this._resize();
            }
        } else {
            let list = this.buckets[index];
            let current = list.head();
            while (current !== null) {
                if (current.value.key === key){
                    current.value.value = value;
                    return;
                } else {
                    current = current.nextNode;
                }
            }
            list.append({ key: key, value: value });
            this.keyCount++;
            if ((this.keyCount / this.capacity) >= this.loadFactor){
                this._resize();
            }
        }
    }

    get(key) {
        let index = this.hash(key);

        if (this.buckets[index] === null || this.buckets[index] === undefined){
            return null;
        } else {
            let list = this.buckets[index];
            let current = list.head();
            while (current !== null) {
                if (current.value.key === key) {
                    return current.value.value;
                } else {
                    current = current.nextNode;
                }
            }
            return null;
        }
    }

    has(key) {
        let index = this.hash(key);

        if (this.buckets[index] === null || this.buckets[index] === undefined){
            return false;
        } else {
            let list = this.buckets[index];
            let current = list.head();
            while (current !== null) {
                if (current.value.key === key) {
                    return true;
                } else {
                    current = current.nextNode;
                }
            }
            return false;
        }
    }

    remove(key) {
        let index = this.hash(key);

        if (this.buckets[index] === null || this.buckets[index] === undefined){
            return false;
        } else {
            let list = this.buckets[index];
            let current = list.head();
            let count = 0;
            while (current !== null) {
                if (current.value.key === key) {
                    list.removeAt(count);
                    this.keyCount--;
                    return true;
                } else {
                    current = current.nextNode;
                    count++;
                }
            }
            return false;
        }
    }

    length() {
        return this.keyCount;
    }

    clear() {
        this.buckets = new Array(this.capacity);
        this.keyCount = 0;
    }

    keys() {
        let keysArray = [];

        for (let i = 0; i < this.capacity; i++) {
            if (this.buckets[i] === null || this.buckets[i] === undefined){
                continue;
            } else {
                let list = this.buckets[i];
                let current = list.head();
                while (current !== null) {
                    keysArray.push(current.value.key);
                    current = current.nextNode;
                
                }
            }
        }
        return keysArray;
    }

    values() {
        let valuesArray = [];

        for (let i = 0; i < this.capacity; i++) {
            if (this.buckets[i] === null || this.buckets[i] === undefined){
                continue;
            } else {
                let list = this.buckets[i];
                let current = list.head();
                while (current !== null) {
                    valuesArray.push(current.value.value);
                    current = current.nextNode;
                }
            }
        }
        return valuesArray;
    }

    entries() {
        let entriesArray = [];

        for (let i = 0; i < this.capacity; i++) {
            if (this.buckets[i] === null || this.buckets[i] === undefined){
                continue;
            } else {
                let list = this.buckets[i];
                let current = list.head();
                while (current !== null) {
                    entriesArray.push([current.value.key, current.value.value]);
                    current = current.nextNode;
                }
            }
        }
        return entriesArray;
    }

    _resize() {
        let list = this.entries();
        this.capacity = this.capacity * 2;
        this.clear();
        for (let i = 0; i < list.length; i++) {
            this.set(list[i][0], list[i][1]);
        }
    }
}

export { hashMap };