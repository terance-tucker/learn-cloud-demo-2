import React from 'react';
import './app.css';

function App() {
    return (
        <div className="App">
            <header className="header">
                <h1>Welcome to My Portfolio</h1>
                <p>A showcase of my work</p>
            </header>
            <main className="content">
                <div className="project">
                    <h2>Project 1</h2>
                    <p>Description of Project 1</p>
                </div>
                <div className="project">
                    <h2>Project 2</h2>
                    <p>Description of Project 2</p>
                </div>
                {/* Add more projects as needed */}
            </main>
        </div>
    );
}

export default App;