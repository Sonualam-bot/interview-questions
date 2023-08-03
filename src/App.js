import { Route, Routes } from "react-router";
import './App.css';

import { Header } from "./Header/Header";
import { Rating } from "./pages/Rating/Rating"
import { Homepage } from "./pages/Homepage";
import { Calculator } from "./pages/calculator/Calculator";
import { Table } from "./pages/table-colorizer/Table";
import { DTable } from "./pages/Dynamic Table/DTable";


function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/tableColorizer" element={<Table />} />
        <Route path="/dtable" element={<DTable />} />
      </Routes>
    </div>
  );
}

export default App;
