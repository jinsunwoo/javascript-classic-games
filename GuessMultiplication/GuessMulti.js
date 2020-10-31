let num1 = Math.ceil(Math.random()*9)
let num2 = Math.ceil(Math.random()*9)
let result = num1 * num2;

let question = document.createElement('div');
// String 으로 바꿔줘야 함
question.textContent = String(num1) + ' x ' + String(num2) + ' ? '
document.body.append(question);
// form 으로 감싸야 버튼 엔터키로 조작 가능
let form = document.createElement('form');
document.body.append(form);
let inputBox = document.createElement('input');
form.append(inputBox);
let button = document.createElement('button');
button.textContent = 'submit'
form.append(button);

let response = document.createElement('div');
document.body.append(response);

form.addEventListener('submit',function(e){
    // 새로고침 되버리면 기존에 저장된 Num1, num2, result 등 모두 날라가 버리니까
    e.preventDefault();
    // input으로 들어온 값은 String 이기 때문에 Number 로 바꿔줘야 함
    if(Number(inputBox.value)===result) {
        response.textContent = '딩동댕';
        inputBox.value = '';
        inputBox.focus();
        num1 = Math.ceil(Math.random()*9);
        num2 = Math.ceil(Math.random()*9);
        result = num1 * num2;
        question.textContent = String(num1) + ' x ' + String(num2) + ' ? '
    } else {
        response.textContent = '땡';
        inputBox.value = '';
        inputBox.focus();
    }
})



