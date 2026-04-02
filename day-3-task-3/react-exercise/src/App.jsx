import React from 'react'
import Card from './components/Card'
import ThemeButton from './components/ThemeButton'
import './App.css'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', padding: '2rem' }}>
      <h1>React Exercise 1 & 2</h1>
      <Card title="React Component">
        This is a Card component styled using CSS Modules, migrating to Vite!
      </Card>

      <div style={{ border: '1px solid #eee', padding: '1rem', borderRadius: '8px' }}>
        <h3>Theme Switcher</h3>
        <ThemeButton />
      </div>
    </div>
  )
}

export default App
