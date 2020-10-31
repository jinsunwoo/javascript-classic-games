let starterWord = document.createElement('div');
starterWord.textContent = '제로초';
document.body.append(starterWord);
// 마우스로 버튼 클릭 안하고도 엔터 누르면 바로 submit 되려면 "form" 태그로 입력창과 버튼을 감싸줘야 함.
let form = document.createElement('form');
document.body.append(form);
let inputBox = document.createElement('input');
form.append(inputBox);
let button = document.createElement('button');
button.textContent = '확인';
form.append(button);

let responseWord = document.createElement('div');
document.body.append(responseWord);
// 콜백 함수는 함수 이름 안써줘도 됨
// tag 안 -> textContent
// input 값 -> value
// button: click, form: submit
form.addEventListener('submit',function(e){
    // event e 는 browser 에서 넘겨 받는 거고, e.preventDefault(); 하는 이유는 이걸 해야 디폴트인 새로고침이 안됨 (다른 페이지로 넘어가거나 새로고침하는게 폼에서 엔터 쳤을때의 기본 동작)
    e.preventDefault();
    if(starterWord.textContent[starterWord.textContent.length-1]===inputBox.value[0]) {
        responseWord.textContent = '딩동댕';
        starterWord.textContent = inputBox.value;
        inputBox.value = '';
        inputBox.focus();
    } else {
        responseWord.textContent = '땡';
        inputBox.value= '';
        inputBox.focus();
    }
})