import "./App.css";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome />
      <SignUp />
      <LogIn />
    </div>
  );
}

export default App;
