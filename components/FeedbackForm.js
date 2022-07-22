import { useEffect, useState } from 'react';
import styles from './FeedbackForm.module.css'
import * as sha256 from 'sha256';

export default function FeedbackForm() {
  const [playerGuess, setPlayerGuess] = useState('');
  const [passCode, setPassCode] = useState(null);
  
  const generatePasscode = () => {
    const shaEncoded = sha256(playerGuess.toLowerCase());
    const numbers = shaEncoded.replace(/\D/g,'').substring(0, 3);
    console.log(`as you can see it's just a hashed word with the first 3 numbers from sha256, my cyber sec minor finally paid off`);
    setPassCode(numbers);
  }

  return (
      <form
        className={styles.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="feedback"
      >  
        <label htmlFor="name">Password</label>
        <input id="name" className={styles['form-field']} value={playerGuess} onChange={(e)=> {setPlayerGuess(e.target.value)}} type="text" name="name" />
        <button className={styles.button} type="button" onClick={generatePasscode}>Crack the code</button>

      <h2>{passCode}</h2>
      <br /><br/>
      <b>If you crack the vault, please keep the lock and find either Ben Perram or Pauline to confirm your win.</b>
      </form>
  )
}
