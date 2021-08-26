import { render, screen } from "@testing-library/react";
import { Converter } from './Converter';


describe('when rendered', () => {
  it('rub input should have a value with a rub amount', () => {
    render(<Converter />);

    expect(screen.getByLabelText(/Сумма в рублях/))
      .toHaveValue(1);
  })
})