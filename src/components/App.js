import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderBall: false,
            posi: 0
        };

        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    buttonClickHandler() {
        this.setState({
            renderBall: true
        });
    }

    handleKeyDown(event) {
        if (event.keyCode === 39) { // ArrowRight key
            this.setState((prevState) => ({
                posi: prevState.posi + 5
            }));
        }
    }

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
    }

    renderBallOrButton() {
        if (this.state.renderBall) {
            return (
                <div
                    className="ball"
                    style={{ left: `${this.state.posi}px`, position: "relative" }}
                ></div>
            );
        } else {
            return (
                <button
                    className="start"
                    onClick={this.buttonClickHandler}
                >
                    Start
                </button>
            );
        }
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        );
    }
}

export default App;
