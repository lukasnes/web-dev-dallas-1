import { useState } from 'react';

const BrokenCounter = () => {
  const [number, setNumber] = useState(0)

  return(
    <>
    <h3>{number}</h3>
    <button onClick={() => {
      setNumber(number + 1)
      setNumber(number + 1)
      setNumber(number + 1)
    }}>
      +3
    </button>
    </>
  )
}

const WorkingCounter = () => {
  const [number, setNumber] = useState(0)

  return(
    <>
    <h3>{number}</h3>
    <button onClick={() => {
      setNumber((n) => n + 1)
      setNumber((n) => n + 1)
      setNumber((n) => n + 1)
    }}>
      +3
    </button>
    </>
  )
}

const Counters = () => {
  return(
    <>
    <h2>This Counter is Broken</h2>
    <BrokenCounter/>
    <h2>This Counter is Working</h2>
    <WorkingCounter/>
    </>
  )
}

export default Counters