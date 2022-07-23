import { Fragment } from "react";
import "./App.css";
import "./assets/css/style.bundle.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "./components/layout/Landing";
import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";
import { PrivateRoute } from "./routing/PrivateRoute";
import setAuthToken from "./utils/setAuthToken";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { CreateProfileFlow } from "./components/profile/CreateProfileFlow";

const App = () => {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
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
};

export default App;
