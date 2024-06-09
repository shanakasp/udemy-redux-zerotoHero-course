import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";

function App() {
  const [value, setvalue] = useState(0);

  const increment = () => {
    setvalue(value + 1);
  };
  return (
    <>
      <Counter count={value} increment={increment}></Counter>
      <Counter count={value} increment={increment}></Counter>
    </>
  );
}

export default App;
