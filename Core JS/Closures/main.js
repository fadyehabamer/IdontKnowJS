function sum(num1, num2) {
    if (!num2) {
        return function (otherNum) {
            return num1 + otherNum
        }
    } else {
        return num1 + num2
    }

}

sum(10, 5)
sum(10)(5) //* function carrying