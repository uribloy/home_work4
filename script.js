let answer;

let num1 =+ prompt ("הכנס בבקשה מספר:");
let num2 =+ prompt ("הכנס מספר נוסף בבקשה:");

if (isNaN (num1) || isNaN (num2)) {
    alert ("הערך שהוכנס אינו תקין");
} else {
    let arg = prompt (" בחר את הפעולה שברצונך לבצע על המספרים שהזנת: '(+ , - , * , /) ");
    if (arg == "+"){
        answer=num1+num2
        alert ("תוצאת התרגיל היא: "+answer);
    }
    else if (arg == "-"){
        answer=num1-num2
        alert ("תוצאת התרגיל היא: "+answer);
    }
    else if (arg == "*"){
        answer =num1*num2
        alert ("תוצאת התרגיל היא: "+answer);
    }
    else if (arg == "/"){
        answer =num1/num2
        alert ("תוצאת התרגיל היא: "+answer);
    }
    else {
        alert ("הערך שהוכנס אינו תקין");
    }
}