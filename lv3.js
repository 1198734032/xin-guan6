let arr = new Set();
[2, 3, 7, 5, 2, 6, 9, 7, 0].forEach(x => arr.add(x));
//把它变为数组类型
let arr1 = Array.from(arr);
//排序找出最大值
for (let i = 0; i < arr1.length - 1; i++) {
    for (let e = i + 1; e < arr1.length; e++) {
        if (arr1[i] < arr1[e]) {
            let temp = arr1[i];
            arr1[i] = arr1[e];
            arr1[e] = temp;
        }
    }
}

let promise = new Promise(function (resolve, reject) {
    let del = delete arr1[0];
    if (del) {
        resolve('success');
        console.log('最大值已被成功删除！');
    } else {
        reject('error');
        console.log(('删除数据时出现错误!')
        )
    }
})
console.log(arr1)