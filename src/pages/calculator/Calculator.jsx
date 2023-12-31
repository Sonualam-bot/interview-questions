import { useState } from "react";
import "./Calculator.css"
import { Header } from "../../Header/Header";
export const Calculator = () => {
    const [sum, setSum] = useState(0);
    const [num, setNum] = useState({
        num1: "",
        num2: ""
    });
    const [sign, setSign] = useState(null);
    const [operation, setOperation] = useState(0);
    const [show, setShow] = useState(false);

    const handleUserInput = (e) => {
        const { name, value } = e.target;
        setNum({ ...num, [name]: value });
    };

    const handleSum = () => {
        const add = +num.num1 + Number(num.num2);
        setSum(add);
        setSign("+");
        setOperation((prev) => prev + 1);
        setShow(true);
    };

    const handleSubtract = () => {
        const subtract = +num.num1 - +num.num2;
        setSum(subtract);
        setSign("-");
        setOperation((prev) => prev + 1);
        setShow(true);
    };

    const multiply = () => {
        const multiple = +num.num1 * +num.num2;
        setSum(multiple);
        setSign("*");
        setOperation((prev) => prev + 1);
        setShow(true);
    };

    const division = () => {
        const divide = +num.num1 / +num.num2;
        setSum(divide);
        setSign("/");
        setOperation((prev) => prev + 1);
        setShow(true);
    };

    const handleResetBtn = () => {
        setNum({
            num1: "",
            num2: ""
        });
        setSum(0);
    };

    return (
        <>
            <Header />
            <h3>This is calculator</h3>

            <h2> Total : {operation} </h2>

            <idv className="calculatorContainer">
                <div className="inputBoxes">
                    <input
                        type="number"
                        placeholder="Enter Num 1"
                        name="num1"
                        value={num.num1}
                        onChange={handleUserInput}
                    />
                    <p> {sign} </p>
                    <input
                        type="number"
                        placeholder="Enter Num 2"
                        name="num2"
                        value={num.num2}
                        onChange={handleUserInput}
                    />
                </div>
                <div className="btn">
                    <button className="buttonsCalculator" onClick={handleSum}> + </button>
                    <button className="buttonsCalculator" onClick={handleSubtract}> - </button>
                    <button className="buttonsCalculator" onClick={multiply}> X </button>
                    <button className="buttonsCalculator" onClick={division}> / </button>
                </div>
                <div className="bottomDIv">
                    <button className="resetBtn" onClick={handleResetBtn}>Reset</button>
                    {show && <p> Result : {sum} </p>}
                </div>
            </idv>
        </>
    );
};
