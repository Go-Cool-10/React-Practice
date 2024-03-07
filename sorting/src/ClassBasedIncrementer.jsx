import { Component } from "react";
class ClassIncrementer extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  increment() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }
  render() {
    return (
      <>
        Count: {this.state.count} <br />
        <button onClick={() => this.increment()}>Increment</button>
      </>
    );
  }
}
export default ClassIncrementer;
