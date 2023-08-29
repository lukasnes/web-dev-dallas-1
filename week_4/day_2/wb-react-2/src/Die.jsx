import { useState } from 'react';
import './dice.css';

const getRandomNum = (upperLimit) => {
  return Math.ceil(Math.random() * upperLimit);
}

const Die = (props) => {
  const [diceValue, setDiceValue] = useState('?');

  const roll = () => {
    const rollResult = getRandomNum(props.sides)
    setDiceValue(rollResult)
  }

  return (
    <button type='button' className='die' onClick={roll}>
      <i>sides={props.sides}</i>
      <b>{diceValue}</b>
    </button>
  )

}

export default Die