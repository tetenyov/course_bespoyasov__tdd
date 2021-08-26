import React, { useState } from 'react';
import styles from './converter.module.css';

export function Converter() {
  const [rub, setRub] = useState(100);
  const [usd, setUsd] = useState(1);

  return (
    <form className={styles.converter}>
      <label>
        <p>
          Сумма в рублях
        </p>
        <input 
          type='number'
          name='rub'
          value={rub}
          onChange={(evt) => setRub(evt.target.value)}
          min='0'
          step='1'
        />
      </label>
      <label>
        <p>
          Сумма в долларах
        </p>
        <input 
          type='number'
          name='usd'
          value={usd}
          onChange={(evt) => setUsd(evt.target.value)}
          min='0'
          step='1'
        />
      </label>
    </form>
  )
}