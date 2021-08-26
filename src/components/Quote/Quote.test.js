import { render, screen } from "@testing-library/react"
import { Quote } from "./Quote";
import { Quotes } from "./quotes";

describe('when rendered', () => {  //from jest
  const quoteStub = Quotes[1]; // stub = фиктивные данные
  const { text, author } = quoteStub;

  it('should contain an expected text', () => {  // from jest
    render(<Quote quote={quoteStub} />)  //from react testing library
    // screen позволяет вз д с тем куском дерева, который рендерит render

    const result = screen.getByText(new RegExp(text));
    expect(result).toBeInTheDocument() //если найдешь result, то он должен быть внутри Document
  });

  it('should contain an expect author', () => {
    render(<Quote quote={quoteStub} />)
    const result = screen.getByText(new RegExp(author));
    expect(result).toBeInTheDocument();
  })
});
