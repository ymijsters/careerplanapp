import { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Landing } from "./components/layout/Landing";
import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <section className='container'>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </section>
      </Routes>
    </Fragment>
  </Router>
);

export default App;
