import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/action";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={handleIncrement}>Click here to increment by 1</button>
    </>
  );
}

export default Counter;
