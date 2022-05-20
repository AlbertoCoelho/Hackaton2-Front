/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";

import GlobalStyle from "./styles/GlobalStyle";

import { AuthProvider, AuthContext } from "./contexts/auth";
import { Game } from "./components/Game";

const App = () => {
  const Private = ({ children }) => {
    const { authenticated } = useContext(AuthContext);

    if (!authenticated) {
      return <Navigate to="/sign-up" />;
    }

    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/game" element={<Game />} />
        </Routes>
        <GlobalStyle />
      </AuthProvider>
    </Router>
  );
};

export default App;