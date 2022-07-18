import { useEffect, useState } from 'react';
import styles from './FeedbackForm.module.css'
import * as sha256 from 'sha256';

const tester = () => {
  console.log('ahhhh');
};


export default function FeedbackForm() {
  const [playerGuess, setPlayerGuess] = useState('');
  const [passCode, setPassCode] = useState(null);
  
  const generatePasscode = () => {
    const shaEncoded = sha256(playerGuess.toLowerCase());
    const numbers = shaEncoded.replace(/\D/g,'').substring(0, 4);
    console.log(numbers);
    setPassCode(numbers);
  }

  return (
      <form
        className={styles.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="feedback"
      >  
        <label htmlFor="name">Name</label>
        <input id="name" className={styles['form-field']} value={playerGuess} onChange={(e)=> {setPlayerGuess(e.target.value)}} type="text" name="name" />
        <button className={styles.button} type="button" onClick={generatePasscode}>Crack the code</button>

      <h2>{passCode}</h2>
      </form>
  )
}
