import React, { useState } from 'react';
import Button from './components/Button';
import Toggle from './components/Toggle';
import InputMirror from './components/InputMirror';
import HoverDiv from './components/HoverDiv';
import TrafficLight from './components/TrafficLight';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [trafficColor, setTrafficColor] = useState('red');

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React Foundation Exercises</h1>
        <p>A collection of interactive components demonstrating core React concepts</p>
      </header>

      <main className="exercises-grid">
        <section className="exercise-section">
          <h2>1. Props & Styling</h2>
          <div className="exercise-content">
            <Button label="Primary Button" color="#4776E6" />
            <Button label="Success Button" color="#00b09b" />
            <Button label="Danger Button" color="#f64f59" />
          </div>
        </section>

        <section className="exercise-section">
          <h2>2. State Management</h2>
          <div className="exercise-content">
            <Toggle />
            <InputMirror />
          </div>
        </section>

        <section className="exercise-section">
          <h2>3. Event Handling</h2>
          <div className="exercise-content">
            <HoverDiv />
          </div>
        </section>

        <section className="exercise-section">
          <h2>4. Conditional Rendering</h2>
          <div className="exercise-content" style={{ flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <button className="custom-button" style={{ background: '#cc0000' }} onClick={() => setTrafficColor('red')}>Red</button>
              <button className="custom-button" style={{ background: '#cca000', color: '#111' }} onClick={() => setTrafficColor('yellow')}>Yellow</button>
              <button className="custom-button" style={{ background: '#009900' }} onClick={() => setTrafficColor('green')}>Green</button>
            </div>
            <TrafficLight color={trafficColor} />
          </div>
        </section>

        <section className="exercise-section">
          <h2>5. Lists & Keys</h2>
          <div className="exercise-content">
            <TodoList />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
