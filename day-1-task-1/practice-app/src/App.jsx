import './App.css'
import MyComponent from './components/MyComponent'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <MyComponent />
        <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>
          Current year: {new Date().getFullYear()}
        </p>
      </main>
    </>
  )
}

export default App
