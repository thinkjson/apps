
import * as React from "react";
import { render } from "react-dom";

interface AppState {
    turn: number;
}

class App extends React.Component<{}, AppState> {
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
            <div className="container mt-5">
                <p>Whose turn is it to do the dishwasher?</p>
                <button onClick={() => this.select(0)} className={"btn btn-lg " + (this.state.turn === 0 ? "btn-primary" : "btn-secondary")}>Caleb</button>
                <button onClick={() => this.select(1)} className={"btn btn-lg " + (this.state.turn === 1 ? "btn-primary" : "btn-secondary")}>Malachi</button>
                <button onClick={() => this.select(2)} className={"btn btn-lg " + (this.state.turn === 2 ? "btn-primary" : "btn-secondary")}>Ellie</button>

                <div className="mt-4">{tonight[0]} is on my right</div>
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