# React Class Based Counter

![counter-class-based](./src/asset/counter-class.png)

- Resource: https://learn.digitalcrafts.com/flex/lessons/full-stack-frameworks/stateful-components/#passing-helper-methods-as-props

```jsx
// check if handleIncrementClick fx is working by console out
class App extends Component {

  handleIncrementClick() {
    console.log('increment clicked');
  }

  render() {
    return (
      <div>
        <h1>0</h1>
        <button onClick={this.handleIncrementClick}>Increment</button>
      </div>
    );
  }
}
```

- this.bind to have this not being undefined:

```jsx
class App extends Component {
  constructor() {
    // this keyword is defined inside of constructor function only.
    super(); // call parent constructor, Component, https://youtu.be/s7UzFzD4zZI?t=275
    // counter prop is available to every Obj, every instance of App class
    console.log('[Constructor] this:', this) // this keyword is defined points at APP component.
    this.counter = 0;
  }

  handleIncrementClick() {
    // this keyword is not defined
    //  inside of class function.
    console.log('this', this); 
 
    // this.counter++;
    // console.log(this.counter);
  }

  render() {
    return (
      <div>
        <h1>0</h1>
        <button onClick={this.handleIncrementClick}>Increment</button>
      </div>
    );
  }
}

export default App;
```

- Fix undefined this keyword
// inside of constructor() we `.bind(this)` to the class function
`this.handleIncrementClick = this.handleIncrementClick.bind(this)`

```jsx
class App extends Component {
  constructor() {
    super();  // calling parent constructor, Component
    console.log('[Constructor] this:', this);
    this.counter = 0;

    this.handleIncrementClick = this.handleIncrementClick.bind(this);
  }

  // define function inside of class
  handleIncrementClick() {
    console.log('this', this); // this now points to App Component
    // this.counter++;
    console.log('this.counter', this.counter);  // => 0, initial value defined in constructor
  }
}

```

* OR option 2 (not use .bind()) Use Arrow Function: (TypeError: Cannot read property 'counter' of undefined)
  - Arrow function knows the context of `this` keyword (App its container)

```jsx
// convert class function into arrow function, 
handleIncrementClick = () => {
  console.log('this', this);
  // this.counter++;
  console.log('this.counter', this.counter); // this.counter is zero as initial value is defined inside of constructor
}

```
