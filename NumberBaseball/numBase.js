/*
* 0<= Math.random() < 1
* 0<= Math.random()*9 < 9 -> floor: 0~8, ceil: 1~9
*
* pop 뒤에서 하나 빼는거 <--> push 뒤로 하나 넣는거
* shift 앞에서 하나 빼는거 <--> unshift 앞으로 하나 넣는거
* splice(1,2) 인덱스 1부터 2개 뽑아서 리스트로 돌려줌. // *** return list type !!!
*
* 문자.split(구분자) -> 배열
* 배열.join(구분자) -> 문자 // 컴마 없이 join 하려면 -> array.join("")
*
* 배열.indexOf(값) -> 값의 인덱스 위치 알려줌. -1 나오면 해당 값이 없는 것.
* */

let explain1 = document.createElement('div');
explain1.textContent = 'Guess a number with 4 digits, and each digit has different number (No repeatetive number is used).'
let explain2 = document.createElement('div')
explain2.textContent += 'You get Strike if number you guessed match with both place and number, and if only numbers you entered exist in answer you will get ball.';
document.body.append(explain1);
document.body.append(explain2);

let form = document.createElement('form');
document.body.append(form);
let inputBox = document.createElement('input');
form.append(inputBox);
let button = document.createElement('button');
button.textContent = '확인';
form.append(button);

let hintWords = document.createElement('div');
document.body.append(hintWords);
let chanceWords = document.createElement('div')
document.body.append(chanceWords);

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arr2 = []
let num;

// 0~8 까지의 index 받을 거기 때문에 floor 사용
for (let i = 0; i < 4; i++) {
    // 0~8, 0~7, 0~6, 0~5 range 사이에서 pick num
    num = Math.floor(Math.random() * (9 - i));
    arr2.push(arr1.splice(num, 1)[0]);
}
let answerNumber = arr2.join("");
let chance = 0;
// when enter key is pressed grab input number and check if it matches with the answer number
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (answerNumber === inputBox.value) {
        hintWords.textContent = 'Bingo!'
        chance = 0;
    } else {
        if (chance > 8) {
            hintWords.textContent = 'you used up all your chance. The number was '+answerNumber
            inputBox.value = '';
            inputBox.focus();
            chanceWords.textContent = ''
            chance = 0;
        } else {
            chance = chance + 1;
            chanceWords.textContent = 'You have ' + String(10-chance) + ' chance left'
            let strike = 0;
            let ball = 0;
            for (let i = 0; i < 4; i++) {
                if (answerNumber[i] === inputBox.value[i]) {
                    strike++;
                } else {
                    if (answerNumber.indexOf(inputBox.value[i]) !== -1) {
                        ball++;
                    }
                }
            }
            hintWords.textContent = 'You have entered number: ' + inputBox.value + '  ' + 'Strike: ' + strike + '   ' + 'Ball: ' + ball;
            inputBox.value = '';
            inputBox.focus();
        }

    }


})
