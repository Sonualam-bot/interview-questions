import { useState } from "react"
import "./DTable.css"
import { NewTable } from "./NewTable"
import { Header } from "../../Header/Header"

export const DTable = () => {
    const [rows, setRows] = useState("")
    const [cols, setCols] = useState("")

    const handleUserInput = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        setRows(data.get("rows"))
        setCols(data.get("columns"))

    }


    return (
        <>
            <Header />
            <h2>TaBLE</h2>


            <div className="formParentContainer" >
                <form onSubmit={(e) => handleUserInput(e)} className="formDetails" >
                    <div className="formContainer" >
                        <label htmlFor="rows">Enter Number of Rows</label>
                        <input type="number" name="rows" id="rows" min={1} />
                        {/* </div>
                    <div> */}
                        <label htmlFor="columns">Enter Number of Columns</label>
                        <input type="number" name="columns" id="columns" min={1} />
                    </div>

                    <button type="submit" > Create</button>

                </form>
            </div>

            <div className="outputDiv" >
                <NewTable rows={rows} cols={cols} />
            </div>

        </>
    )
}