import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Mountain from './Mountains/Mountain';

const app = props => {
    const [mntState, setMntState] = useState({
        mountain: [
            { name: "Mount Everest", height: "8848" },
            { name: "Kanchenjunga", height: "8586" },
            { name: "K2", height: "8611" }
        ],

    });

    const switchNameHandler = props => {
        setMntState(
            {
                mountain: [
                    { name: "Everest", height: "8848" },
                    { name: "Kanchenjunga", height: "8586" },
                    { name: "K2", height: "8612" }
                ]
            }
        )
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <h3>Mountains are calling ...</h3>

            <button onClick={switchNameHandler}> Switch </button>
            <Mountain name={mntState.mountain[0].name} height={mntState.mountain[0].height} />
            <Mountain name={mntState.mountain[2].name} height={mntState.mountain[2].height}> <small >Most dengerous</small></Mountain>
            <Mountain name={mntState.mountain[1].name} height={mntState.mountain[1].height} />
            <p class="App-intro">
                {/* To get started, edit <code>src/App.js</code> and save to reload. */}
            </p>


        </div>
    )
}

export default app;

/*
  state =
    
*/