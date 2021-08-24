import { render, screen } from "@testing-library/react"
import { Quote } from "./Quote";

describe('when rendered', () => {  //from jest
  it('should contain an expected text', () => {  // from jest
    render(<Quote />);  //from react testing library
    // screen позволяет вз д с тем куском дерева, который рендерит render

    const result = screen.getByText(/Test Quote/i);
    expect(result).toBeInTheDocument() //если найдешь result, то он должен быть внутри Document
  })
})