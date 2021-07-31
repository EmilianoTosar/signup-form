import React from 'react'
import Form from './components/Form'
import Button from './components/Button'
import './App.css'

const App = () => {
  return (
    <div className="container">
      <div className="text">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve
          problems in real-time. Watching 
          scripted tutorials is great, but 
          understanding how developers think is 
          invaluable. 
        </p>
      </div>
      <div className="form-content">
        <Button />
        <Form />
      </div>
    </div>
  )
}

export default App
