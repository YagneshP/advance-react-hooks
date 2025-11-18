// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CounterContext = React.createContext()

// 🐨 create a CountProvider component here that does this:
function CounterContextProvider({children}) {
  const [count, setCount] = React.useState(0)
  const value = [count, setCount]
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  )
}

function CountDisplay() {
  // 🐨 get the count from useContext with the CountContext
  const [count] = React.useContext(CounterContext)
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // 🐨 get the setCount from useContext with the CountContext
  const [, setCount] = React.useContext(CounterContext)
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      {/*
        🐨 wrap these two components in the CountProvider so they can access
        the CountContext value
      */}
      <CounterContextProvider>
        <CountDisplay />
        <Counter />
      </CounterContextProvider>
    </div>
  )
}

export default App
