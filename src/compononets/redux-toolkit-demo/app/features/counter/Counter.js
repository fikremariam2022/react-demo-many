import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const result = Number(incrementAmount) || 0;
  return (
    <section>
      <p style={style.counter}>{count}</p>

      <div style={style.container}>
        <button style={style.button} onClick={() => dispatch(increment())}>
          +
        </button>

        <button style={style.button} onClick={() => dispatch(decrement())}>
          -
        </button>
        <button style={style.button} onClick={() => dispatch(reset())}>
          RESET
        </button>
      </div>
      <p style={{ ...style.container, marginTop: 50 }}>
        <input
          style={style.input}
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          style={style.button}
          onClick={() => dispatch(incrementByAmount(result))}
        >
          INCREMENT BY VALUE
        </button>
      </p>
    </section>
  );
};
export default Counter;
const style = {
  button: {
    fontSize: 18,
    marginRight: 10,
    backgroundColor: "black",
    color: "white",
    padding: 8,
    borderRadius: 3,
    widthMinimum: 80,
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  counter: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "orange",
  },
  input: {
    height: 40,
    width: 60,
    marginRight: 5,
    fontSize: 30,
    textAlign: "center",
  },
};
