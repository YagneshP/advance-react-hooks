// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'
import {use} from 'react'

const CounterContext = React.createContext()

function CounterContextProvider({children}) {
  const [count, setCount] = React.useState(0)
  const value = [count, setCount]
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  )
}
function useCount() {
  const context = React.useContext(CounterContext)
  if (!context) {
    throw new Error('useCount must be used within a CounterContextProvider')
  }
  return context
}

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CounterContextProvider>
        <CountDisplay />
        <Counter />
      </CounterContextProvider>
    </div>
  )
}

export default App
