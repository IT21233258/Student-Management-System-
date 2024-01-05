import { Component } from "react";

class CounterClass extends Component {


    constructor() {

        super();

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

        this.state = {
            Number: 0
        }

    }

    render() {

        return (
            <div>

                <h1>Counter={this.state.Number}</h1>

                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>

            </div>
        );
    }

    increment() {
        this.setState({
            Number: this.state.Number + 1
        })


    }
    decrement() {
        this.setState({
            Number: this.state.Number - 1
        })
    }

}

export default CounterClass;