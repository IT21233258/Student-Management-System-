import Header from "./components/Header";
import AddStudent from "./components/AddStudent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllStudent from "./components/AllStudent";
import EditStudent from "./components/EditStudent";
import DeleteStudent from "./components/DeleteStudent";
import { Navigate } from 'react-router-dom';


function App() {
  return (


    <div className="App">

      <Router>

        <Header />

        <Routes>
          <Route exact path="/show" element={<AllStudent />} />
          <Route exact path="/add" element={<AddStudent />} />
          <Route exact path="/edit/:id" element={<EditStudent />} />
          <Route exact path="/delete/:id" element={<DeleteStudent />} />
          <Route path="/show" element={<Navigate to={<AllStudent />} />} />
        </Routes>

      </Router>



    </div >


  );
}

export default App;
