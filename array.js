// 1
// const array = ["hdcms", "houdunren"];
// array.push("houdunwang");
// console.log(array);

//2
// console.log(([1, 2, 3]).toString()); // 1,2,3

//3
// let btns = document.querySelectorAll('button');
// console.log(btns); //包含length属性
// Array.from(btns, (item) => {
//     item.style.background = 'blue';
// });

//5
// let a = [1, 2, 3];
// let b = ['a', '后盾人', ...a];
// console.log(b); //["a", "后盾人", 1, 2, 3]

// let [name, url] = ['后盾人', 'houdunren.com'];
// console.log(url);

// let arr = ["后盾人", "hdcms"];
// let hd = ["houdunren"];
// console.log(...arr);
// hd.push(...arr);
// console.log(hd); //["houdunren", "后盾人", "hdcms"]

//for each
let lessons = [
    { title: '媒体查询响应式布局', category: 'css' },
    { title: 'FLEX 弹性盒模型', category: 'css' },
    { title: 'MYSQL多表查询随意操作', category: 'mysql' }
];

lessons.forEach((item, index, array) => {
    item.title = item.title.substr(0, 5);
    console.log(item, index, array);
});
console.log(lessons);

//6
//7
//8
//9
//10

