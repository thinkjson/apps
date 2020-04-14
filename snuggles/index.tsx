
import { Component, render, createElement } from "preact";
import "./index.css";

const h = createElement; // preact weirdness

interface AppState {
    turn: number;
}

class App extends Component<{}, AppState> {
    children = ["Caleb", "Malachi", "Ellie"];

    constructor(props: any) {
        super(props);
        this.state = { turn: 0 };
    }

    select(turn: number) {
        this.setState({ turn });
    }

    render() {
        const tonight = [...this.children, ...this.children].slice(this.state.turn, this.state.turn + 3);

        return (
            <div className="container">
                <p>Whose turn is it to do the dishwasher?</p>
                <button onClick={() => this.select(0)} className={(this.state.turn === 0 ? "button-primary" : "")}>Caleb</button>
                <button onClick={() => this.select(1)} className={(this.state.turn === 1 ? "button-primary" : "")}>Malachi</button>
                <button onClick={() => this.select(2)} className={(this.state.turn === 2 ? "button-primary" : "")}>Ellie</button>

                <div className="results">
                    <div>{tonight[0]} is on my right</div>
                <div>{tonight[2]} is on my left</div>
                <div>{tonight[1]} is on the floor</div>
            </div>
        );
    }
}

render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}