import logo from "./logo.svg";
import "./App.css";
import { UserForm } from "./UserForm";
import "./css/tailwind.css";

function App() {
  return (
    <div className="min-h-screen bg-blue-500 flex justify-center items-center">
      <UserForm />
    </div>
  );
}

export default App;
