import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./page/Homepage";
import Detailpage from "./page/Detailpage";
import axios from "axios";

axios.defaults.baseURL = "https://api.todoist.com/rest/v1/tasks";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail" element={<Detailpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
