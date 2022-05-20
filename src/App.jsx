/* eslint-disable no-unused-vars */
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
import { Game } from "./components/Game";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";

const App = () => {
  /* const Private = ({ children }) => {
    const { authenticated } = useContext(AuthContext);

    if (!authenticated) {
      return <Navigate to="/sign-up" />;
    }

    return children;
  }; */

  const [user, setUser] = useState({
		done: 0,
    correct: 0
	})

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/game" element={<Game />} />
        </Routes>
        <GlobalStyle />
      </Router>
      </UserContext.Provider>
    </>
  );
};

export default App;

/*<Route path="/sign-in" element={<SignIn />} />
<Route path="/sign-up" element={<SignUp />} />*/