while (true) {
    var num1 = Math.ceil(Math.random()*9)
    var num2 = Math.ceil(Math.random()*9)
    var ans = num1 * num2
    var check = false;
    while(!check) {
        var input = prompt(String(num1) + " x " + String(num2) + " ?" )
        if (Number(input) === ans) {
            check = true;    
        } else if(input === null) {
            break;
        } else {
            alert("Wrong answer. Try again!")
        }         
    }
    if (input === null) break;
}
