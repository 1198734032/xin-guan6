let map = new Map([['Bob', 6], ['John', 18], ['Mike', 20]]);
let sum = 0;
console.log(sum);
let promise = new Promise(resolve => {
    for (let value of map.values()) {
        sum = sum + value;
    };
    resolve(sum);
})
promise.then((sum) => {
    console.log(sum)
});

