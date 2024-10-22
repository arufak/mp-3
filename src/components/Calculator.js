import React, { useState } from 'react';
export default function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    const [isNegative, setIsNegative] = useState(false); // Add state for negative check
    const handleCalculate = (operator) => {
        const number1 = parseFloat(num1.toString());
        const number2 = parseFloat(num2.toString());
        if (isNaN(number1) || isNaN(number2)) {
            setResult('Please enter valid numbers.');
            setIsNegative(false);
            return;
        }
        let calculation;
        switch (operator) {
            case '+':
                calculation = number1 + number2;
                break;
            case '-':
                calculation = number1 - number2;
                break;
            case '*':
                calculation = number1 * number2;
                break;
            case '/':
                calculation = number1 / number2;
                break;
            default:
                calculation = 0;
        }
        setResult(`${calculation}`);
        setIsNegative(calculation < 0); // Check if the result is negative
    };
    const handlePower = () => {
        const number1 = parseFloat(num1.toString());
        const number2 = parseFloat(num2.toString());
        if (isNaN(number1) || isNaN(number2)) {
            setResult('Please enter valid numbers.');
            setIsNegative(false);
            return;
        }
        const calculation = Math.pow(number1, number2);
        setResult(`${calculation}`);
        setIsNegative(calculation < 0); // Check if the result is negative
    };
    const clearResult = () => {
        setNum1('');
        setNum2('');
        setResult('');
        setIsNegative(false);
    };
    return (React.createElement("div", { className: "calculator" },
        React.createElement("input", { type: "number", value: num1, onChange: (e) => setNum1(e.target.value), placeholder: "Enter number 1" }),
        React.createElement("input", { type: "number", value: num2, onChange: (e) => setNum2(e.target.value), placeholder: "Enter number 2" }),
        React.createElement("div", null,
            React.createElement("button", { onClick: () => handleCalculate('+') }, "+"),
            React.createElement("button", { onClick: () => handleCalculate('-') }, "-"),
            React.createElement("button", { onClick: () => handleCalculate('*') }, "*"),
            React.createElement("button", { onClick: () => handleCalculate('/') }, "/"),
            React.createElement("button", { onClick: handlePower }, "^"),
            React.createElement("button", { onClick: clearResult }, "Clear")),
        React.createElement("div", { className: `result-box ${isNegative ? 'negative' : ''}` }, result)));
}
;
