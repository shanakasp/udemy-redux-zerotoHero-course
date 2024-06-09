function Counter({ count, increment }) {
  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={increment}>Click here to increment by 1</button>
    </>
  );
}

export default Counter;
