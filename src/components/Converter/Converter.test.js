import { render, screen } from "@testing-library/react";
import { Converter } from './Converter';
import userEvent from '@testing-library/user-event';

const mockUpdateRub = jest.fn();//fn - метод, который создает функцию, которая следит за тем, что с ней происходит
const mockUpdateUsd = jest.fn();

jest.mock('./useConverter', () => ({
  useConverter() {
    return {
      rub: 100,
      usd: 2.38,
      updateRub: mockUpdateRub,
      updateUsd: mockUpdateUsd,
    }
  }
}))

describe('when rendered', () => {
  // it.only('rub input should have a value with a rub amount', () => { //only запускает только этот конкретный тест. позволяет определить какой именно тест не проходит
  it('rub input should have a value with a rub amount', () => {
    render(<Converter />);

    expect(screen.getByLabelText(/Сумма в рублях/))
      .toHaveValue(100);
  })

  it('usd input should have a value with a usd amount', () => {
    render(<Converter />);

    expect(screen.getByLabelText(/Сумма в долларах/))
      .toHaveValue(2.38);
  })
})

describe('when typed in a RUB input', () => {
  it('should update its value', () => {
    render(<Converter />);
    const input = screen.getByLabelText(/Сумма в рублях/);
    
    userEvent.clear(input);
    userEvent.type(input, '42'); //когда юзер пишет внутри инпута 42
    expect(mockUpdateRub).toHaveBeenCalledWith('42');
  })
})

describe('when typed in a USD input', () => {
  it('should update its value', () => {
    render(<Converter />);
    const input = screen.getByLabelText(/Сумма в долларах/);
    
    userEvent.clear(input);
    userEvent.type(input, '42'); //когда юзер пишет внутри инпута 42
    expect(mockUpdateUsd).toHaveBeenCalledWith('42');
  })
})