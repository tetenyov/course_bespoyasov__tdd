import { Quotes } from './quotes';
import styles from './quote.module.css';

export function Quote() {
  const { text, author } = Quotes[0];

  return (
    <footer className={styles.quote}>
      <blockquote>
        { text }
      </blockquote>
      <cite className={styles.author}>
        - { author }
      </cite>
    </footer>
  )
};