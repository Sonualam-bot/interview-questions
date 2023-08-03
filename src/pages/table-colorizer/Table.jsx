import { useState } from "react"
import "./Table.css"
import { Header } from "../../Header/Header";
export const Table = () => {
    const [input, setInput] = useState("");
    const [currentColorIndex, setCurrentColorIndex] = useState([]);

    const handlUserBoxClick = (index) => {
        console.log(index)
    }


    //to take the input which is made by user
    const handleUserInput = (e) => {
        setInput(e.target.value)
    }

    //for the button to change the state
    //here parseInt what does is it converts the strings to number before and later isNaN checks if the 
    // the number is not a number than the if block does not execute and if it is a number than it executes
    const handleApplyButton = () => {
        const inputValue = parseInt(input);
        if (!isNaN(inputValue) && inputValue >= 0 && inputValue < 9) {
            setCurrentColorIndex((prev) => [...prev, inputValue]);
        }
    };


    const showColouredBox = (index) => {
        return currentColorIndex.includes(index) ? "colouredBox" : "";
        // here i am Checking  if the index is colored
    };

    const clearFunction = () => {
        setInput("")
        setCurrentColorIndex("")

    }

    return (
        <>
            <Header />
            <h2>Table</h2>

            <div className="tableColorContainer">
                <input className="colorInput" type="number" placeholder="input box num " onChange={handleUserInput} />
                <div className="buttonContainer" >
                    <button className="tableColorBtn" onClick={handleApplyButton} > Apply </button>
                    <button className="tableColorBtn" onClick={clearFunction}  >Clear Me</button>
                </div>


                <div className="tableContainer" >
                    {[...Array(9)].map((_, index) => {
                        return (
                            <div key={index} value="index"
                                className={`tableDiv ${showColouredBox(index)}`}
                                onClick={() => handlUserBoxClick(index)} > {index} </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}