import styles from './converter.module.css';
import { useConverter as converterHook} from './useConverter';

export function Converter({ useConverter = converterHook }) { // такая конструкция - для тестов, в тестах мы передаем useCallback как пропс
  const { usd, rub, updateUsd, updateRub } = useConverter(100, 42);

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