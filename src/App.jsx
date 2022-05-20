import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
//import { useContext } from "react";

//import SignIn from "./pages/SignIn";
//import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";

import GlobalStyle from "./styles/GlobalStyle";

//import { AuthProvider, AuthContext } from "./contexts/auth";

const App = () => {
  /* const Private = ({ children }) => {
    const { authenticated } = useContext(AuthContext);

    if (!authenticated) {
      return <Navigate to="/sign-up" />;
    }

    return children;
  }; */

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
        <GlobalStyle />     
    </Router>
  );
};

export default App;