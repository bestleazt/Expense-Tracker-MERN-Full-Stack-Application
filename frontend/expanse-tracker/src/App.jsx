import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expanse from "./pages/Dashboard/Expense";
import UserProvider from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Root />}></Route>
            <Route path="/login" exact element={<Login />}></Route>
            <Route path="/signup" exact element={<SignUp />}></Route>
            <Route path="/dashboard" exact element={<Home />}></Route>
            <Route path="/income" exact element={<Income />}></Route>
            <Route path="/expanse" exact element={<Expanse />}></Route>
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
};
export default App;

const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};
