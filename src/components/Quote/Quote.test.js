import { render, screen } from "@testing-library/react"
import { Quote } from "./Quote";
import { Quotes } from './quotes';

describe('when rendered', () => {  //from jest
  const testQuote = Quotes[0];

  it('should contain an expected text', () => {  // from jest
    render(<Quote />);  //from react testing library
    // screen позволяет вз д с тем куском дерева, который рендерит render

    const result = screen.getByText(testQuote.text);
    expect(result).toBeInTheDocument() //если найдешь result, то он должен быть внутри Document
  });
});
