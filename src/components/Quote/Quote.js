import { Quotes } from './quotes';

export function Quote() {
  const { text, author } = Quotes[0];

  return (
    <>
      <blockquote>
        { text }
      </blockquote>
      <cite>
        - { author }
      </cite>
    </>
  )
};