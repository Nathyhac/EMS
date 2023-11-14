import { MantineProvider } from "@mantine/core";
import "./index.css";
import "@mantine/core/styles.css";
import Dashboard from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployee from "./AddEmployee";
import CreateRole from "./CreateRole";
import Home from "./Home";
import ShowEmployee from "./ShowEmployee";
import Hierarchy from "./Hierarchy";

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />}></Route>
            <Route path="addemployee" element={<AddEmployee />}></Route>
            <Route path="createrole" element={<CreateRole />}></Route>
            <Route path="showemployee" element={<ShowEmployee />}></Route>
            <Route path="hierarchy" element={<Hierarchy />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
