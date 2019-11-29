let myPow = (x, n) => {
    let a = 1;
    for (let i = 1; i <= n; i++) {
        a = a * x;
    }
    console.log(a);
};
let result2 = myPow(4, 2);
let result1 = myPow(0.5, 2)

