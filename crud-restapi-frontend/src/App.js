import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmployee from "./employee/AddEmployee";
import UpdateEmployee from "./employee/UpdateEmployee";
import ViewEmployee from "./employee/ViewEmployee";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add-employee" element={<AddEmployee />} />
          <Route
            exact
            path="/update-employee/:id"
            element={<UpdateEmployee />}
          />
          <Route exact path="/employee/:id" element={<ViewEmployee />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
