import logo from "./logo.svg";
import "./App.css";
import { Calender } from "./Calender";
import "./tailwind.css";
import { AllHabits } from "./AllHabits";
import { SignIn } from "./Login/SignIn";
import { SignUp } from "./Login/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";
import { isAuthenticate } from "./Api/utills";

function App() {
  return (
    <div className="min-h-screen bg-blue-600">
      {/* <SignIn /> */}

      {/* <header className="bg-slate-400 text-white p-2 flex justify-center items-center">
        <div className=" text-lg">🌱 Habit Tracker</div>
      </header>
      <main>
        <AllHabits />
        {/* <Calender /> 
      </main> */}

      <Routes>
        <Route
          path="/"
          element={
            isAuthenticate() === false ? (
              <SignIn />
            ) : (
              <Navigate to="/my-habit" />
            )
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/my-habit" element={<AllHabits />} />
      </Routes>
    </div>
  );
}

export default App;
