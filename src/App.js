/*import { useState } from "react";*/
import User from "./components/User";
import "./App.css";

function App() {
  /*const [name, setName] = useState("test");
  const [password, setPassword] = useState(" ");
  const onClick = (e) => {
    e.preventDefault();
    console.log("name: ", name);
    setName("");
    console.log("password", password);
    setPassword("");
  };*/

  return (
    <div className="App">
      <User />
    </div>
  );
}

export default App;
