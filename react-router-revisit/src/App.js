import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { SignIn } from "./Pages/SignIn";
import { SignOut } from "./Pages/SignUp";
import { Home } from "./Pages/Home";
import { Dashboard } from "./Pages/Dashboard";
import { Habit } from "./Pages/Habit";
import { AddHabit } from "./Pages/AddHabit";
import { Users } from "./Pages/Users";
import { DisplayHabit } from "./Pages/DisplayHabit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />

        <Route path="/" element={<Dashboard />}>
          <Route path="habit" element={<Habit />} />

          <Route path="habit/new" element={<AddHabit />} />

          <Route path="users" element={<Users />} />

          <Route path="" element={<Habit />} />
        </Route>
      </Routes>

      {/* <Routes>
        <Route path="/SignIn" element={<SignIn />} />

        <Route path="/" element={<Dashboard />}>
          <Route path="habit" element={<Habit />}>
            <Route path="new" element={<AddHabit />} />
           
          </Route>

          <Route path="users" element={<Users />} />

          <Route path="" element={<Habit />} />
        </Route>
      </Routes>  */}
    </>
  );
}

export default App;
