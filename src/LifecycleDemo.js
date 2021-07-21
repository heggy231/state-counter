import React, { useState, useEffect } from "react";

const LifecycleDemo = (props) => {
  console.log("render()");

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
    console.log("Runs after every render");
  });

  // componentWillUnmount()
  useEffect(() => {
    // inside of callback
    return () => {
      console.log("Runs when component is unmounted/removed");
    };
  }, []);

  // async
  useEffect(async () => {
    const someAPI = "https://api.chucknorris.io/jokes/search?query=Tesla";
    const val = await fetch(someAPI).then(res => res.json()).then(data => data.result[0].value);
    console.log(`API returned: ${val}`);
  });

  return (
    <>
      <h1>Lifecycle Demo {count}</h1>
      <button onClick={_increment}>+</button>
    </>
  );
};

export default LifecycleDemo;
