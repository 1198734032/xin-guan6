//方法一
let arr = [-4, -1, 0, 3, 10];
let arr2 = [];
//将arr中的平方值加入arr2中
for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i] * arr[i]);
}


//方法二交换排序法
for (let e = 0; e < arr.length - 1; e++) {
    for (let a = e + 1; a < arr.length; a++) {
        if (arr2[e] > arr2[a]) {
            let temp = arr2[e];
            arr2[e] = arr2[a];
            arr2[a] = temp;
        }
    }
}
console.log(arr2);



//方法2
let arr = [-4, -1, 0, 3, 10];
let arr2 = [];
for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i] * arr[i]);
}
//比值函数
let Sort = (a, b) => a - b;
arr2.sort(Sort);
console.log(arr2);



