import { Quotes } from './quotes';
import styles from './quote.module.css';

export function Quote() {
  const randomIndex = Math.floor(Math.random() * Quotes.length)
  const { text, author } = Quotes[randomIndex];

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