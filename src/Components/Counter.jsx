import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/action";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={handleIncrement}>Click here to increment by 1</button>
      <button onClick={handleDecrement}>Click here to decrement by 1</button>
    </>
  );
}

export default Counter;
