function getPasswordChecker(password = 'real') {
    return function (enteredPassword){
        if (enteredPassword === password){
            return true;
            console.log("Вы ввели верный пароль")
        } else {
            return false;
            console.log("Вы ввели неверный пароль")
        }  
    }
}

let psw1 = getPasswordChecker();

console.log(psw1('hh'));

let psw2 = getPasswordChecker();

console.log(psw2('real'));
