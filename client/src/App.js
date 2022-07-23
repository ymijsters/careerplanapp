import { Fragment } from "react";
import "./App.css";
import "./assets/css/style.bundle.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "./components/layout/Landing";
import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";
import { PrivateRoute } from "./routing/PrivateRoute";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { CreateProfileFlow } from "./components/profile/CreateProfileFlow";

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <div
          className='d-flex flex-column flex-root'
          style={{ height: "100%" }}
        >
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route
              path='/createprofile'
              element={<PrivateRoute component={CreateProfileFlow} />}
            />
          </Routes>
        </div>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
