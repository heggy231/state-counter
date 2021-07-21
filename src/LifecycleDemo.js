import React, { useState, useEffect } from "react";

const LifecycleDemo = (props) => {
  console.log('render()');

  const [count, setCount] = useState(0);

  const _increment = () => setCount(count + 1);

  // componentDidMount() is called when the component is first mounted
  useEffect(() => {
    console.log(`Runs once.`);
  }, []);

  useEffect(() => {
    console.log(`count is now ${count}`);
  }, [count]);

  // componentDidUpdate()
  useEffect(() => {
    console.log('Runs after every render');
  });

  return (
    <>
      <h1>Lifecycle Demo {count}</h1>
      <button onClick={_increment}>+</button>
    </>
  );

}

export default LifecycleDemo;
