import { useState } from 'react'
import './App.css'
import styles from './App.module.css';
import LibCssDemo from './components/LibCssDemo';

function App() {
  

  return (
    <>
      <div className="inline" style={{ color: 'blue', backgroundColor: 'red', padding: '8px', margin: '8px', borderRadius: '8px' }}>Inline</div>
      <div className="external">external</div>
      <div className={styles.primary}>modular</div>
      <LibCssDemo />
    </>
  )
}

export default App
