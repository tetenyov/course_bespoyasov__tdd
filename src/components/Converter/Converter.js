import styles from './converter.module.css';
import { useConverter } from './useConverter';

export function Converter() {
  const { usd, rub, updateUsd, updateRub } = useConverter();

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
          onChange={(evt) => updateRub(evt.target.value)}
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
          onChange={(evt) => updateUsd(evt.target.value)}
          min='0'
          step='1'
        />
      </label>
    </form>
  )
}