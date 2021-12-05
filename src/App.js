import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mountain from './Mountains/Mountain';

class App extends Component {

    state = {
        mountain: [
            { name: "Mount Everest", height: "8848" },
            { name: "Kanchenjunga", height: "8586" },
            { name: "K2", height: "8611" }
        ]
    }
    switchNameHandler = props => {
        this.setState(
            {
                mountain: [
                    { name: "Everest", height: "8848" },
                    { name: "Kanchenjunga", height: "8586" },
                    { name: "K2", height: "8612" }
                ]
            }
        )
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <h3>Mountains are calling ...</h3>

                <button onClick={this.switchNameHandler}> Switch </button>
                <Mountain name={this.state.mountain[0].name} height={this.state.mountain[0].height} />
                <Mountain name={this.state.mountain[2].name} height={this.state.mountain[2].height}> <small >Most dengerous</small></Mountain>
                <Mountain name={this.state.mountain[1].name} height={this.state.mountain[1].height} />
                <p class="App-intro">
                    {/* To get started, edit <code>src/App.js</code> and save to reload. */}
                </p>


            </div>
        )
    }
}

export default App;
