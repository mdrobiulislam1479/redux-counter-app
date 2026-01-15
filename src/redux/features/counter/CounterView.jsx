import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center pt-10 ">
      <h1 className="text-4xl font-bold text-white">Counter App</h1>
      <div className="text-4xl font-bold text-white mt-6 px-10 py-6 rounded-2xl border inline-block">
        {count}
      </div>
      <div className="mt-10">
        <button
          onClick={() => dispatch(increment())}
          className="text-4xl text-white px-10 py-3 border rounded-2xl cursor-pointer mr-5"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="text-4xl text-white px-10 py-3 border rounded-2xl cursor-pointer mr-5"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="text-4xl text-white px-10 py-3 border rounded-2xl cursor-pointer"
        >
          Increment By 5
        </button>
      </div>
    </div>
  );
};

export default CounterView;
