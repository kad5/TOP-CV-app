import { useState } from "react";
import "./assets/styles/App.css";
import Header from "./assets/components/Header";

function App() {
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState(null);

  return (
    <>
      <Header username={username} logged={logged}></Header>
    </>
  );
}

export default App;
