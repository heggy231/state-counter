import React, { useState } from "react";

const LifecycleDemo = (props) => {
  console.log('render()');

  const [count, setCount] = useState(0);

  const _increment = () => setCount(count + 1);

    return (
      <>
        <h1>Lifecycle Demo {count}</h1>
        <button onClick={_increment}>+</button>
      </>
    );

}

export default LifecycleDemo;
