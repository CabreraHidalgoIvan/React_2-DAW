import React, {useState} from 'react';

export function FunctionComponent() {
  const [count, setCount] = useState(0);

  return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          +1
        </button>

        <button onClick={() => setCount(count - 1)}>
          -1
        </button>
      </div>
  );
}