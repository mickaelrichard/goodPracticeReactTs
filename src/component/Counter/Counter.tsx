import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [removePayload, setRemovePayload] = useState(1);
  const [addPayload, setAddPayload] = useState(1);

  const increment = (): void => {
    setCount((c) => (c = c + 1));
  };
  const decrement = (): void => {
    setCount((c) => (c = c - 1));
  };
  const reset = (): void => {
    setCount(0);
  };

  const incrementBy = (): void => {
    setCount((c) => (c = c + addPayload));
    setAddPayload(0);
  };
  const decrementBy = (): void => {
    setCount((c) => (c = c - removePayload));
    setRemovePayload(0);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>

      <div>
        <input
          type="number"
          value={addPayload}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setAddPayload(Number(e.target.value));
          }}
        />
        <button onClick={incrementBy}> Increment By</button>
      </div>
      <div>
        <input
          type="number"
          value={removePayload}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setRemovePayload(Number(e.target.value));
          }}
        />
        <button onClick={decrementBy}> Decrement By</button>
      </div>

      <div>{count}</div>
    </div>
  );
};

export default Counter;
