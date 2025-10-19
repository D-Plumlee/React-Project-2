import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useState } from "react";
import Layout from "./pages/Layout.js";
import Home from "./pages/Home.js";
import Languages from "./pages/Languages.js";
import LangTable from "./pages/LangTable.js";
import Contact from "./pages/Contact.js";
import { JsonContext } from "./JsonContext.js";
import "./App.css";

function App() {
  const initialJson = require("./Langs.json");
  const [contextVal, setContextVal] = useState({ ...initialJson });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            element={
              // <ContextWrapper val={contextVal} setVal={setContextVal} />
              // <ContextWrapper val={{ contextVal, setContextVal }} />
              <JsonContext.Provider value={{ contextVal, setContextVal }}>
                <Outlet />
              </JsonContext.Provider>
            }
          >
            <Route path="Languages" element={<Languages />} />
            <Route path="LangTable" element={<LangTable />} />
          </Route>

          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// function ContextWrapper(val, setVal) {
//   return (
//     <JsonContext.Provider value={{ val, setVal }}>
//       <Outlet />
//     </JsonContext.Provider>
//   );
// }
function ContextWrapper(val) {
  return (
    <JsonContext.Provider value={{ ...val }}>
      <Outlet />
    </JsonContext.Provider>
  );
}

export default App;
