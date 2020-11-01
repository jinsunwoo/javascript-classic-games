/*
* 0<= Math.random() < 1
* 0<= Math.random()*9 < 9 -> floor: 0~8, ceil: 1~9
* */
let arr1 = [1,2,3,4,5,6,7,8,9]
let arr2 = []
let num;
for(let i=0;i<4;i++) {
    // 0~8 까지의 index 받을 거기 때문에 floor 사용
    num = arr1[Math.floor(Math.random()*9)]
    arr2.push(num)
}
console.log(arr2)