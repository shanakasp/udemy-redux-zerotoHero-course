import { useState } from "react";

function Counter() {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };

  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={increment}>Click here to increment by 1</button>
    </>
  );
}

export default Counter;
