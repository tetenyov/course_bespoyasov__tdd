import { Quotes } from './quotes';
import styles from './quote.module.css';
import { selectRandomQuote } from './selectRandomQuote';

const defaultQuote = selectRandomQuote(Quotes);

export function Quote({ quote = defaultQuote }) {
  const { text, author } = defaultQuote;
 
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