import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/react-2-for-beginners/" element={<Home />} />
        <Route path="/react-2-for-beginners/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
