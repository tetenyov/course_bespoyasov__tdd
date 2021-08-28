import { screen } from "@testing-library/react";
import { Converter } from './Converter';
import userEvent from '@testing-library/user-event';
import { renderWithStore } from "../../testUtils";

const mockUpdateRub = jest.fn();//fn - метод, который создает функцию, которая следит за тем, что с ней происходит
const mockUpdateUsd = jest.fn();
const mockInitialRender = jest.fn();

// jest.mock('./useConverter', () => ({
//   useConverter() {
//     return {
//       rub: 100,
//       usd: 2.38,
//       updateRub: mockUpdateRub,
//       updateUsd: mockUpdateUsd,
//     }
//   }
// }))

  function useConverterMock(initialValue, initialCourse) {
    mockInitialRender(initialCourse);

    return {
      rub: 100,
      usd: 2.38,
      updateRub: mockUpdateRub,
      updateUsd: mockUpdateUsd,
    }
  }

const stateMock = { course: { value: 100500 } }

beforeEach(() => jest.clearAllMocks());

afterAll(() => jest.restoreAllMocks());

describe('when rendered', () => {
  // it.only('rub input should have a value with a rub amount', () => { //only запускает только этот конкретный тест. позволяет определить какой именно тест не проходит
  it('rub input should have a value with a rub amount', () => {
    renderWithStore(<Converter  useConverter={useConverterMock}/>, {state: stateMock});

    expect(screen.getByLabelText(/Сумма в рублях/))
      .toHaveValue(100);
  })

  it('usd input should have a value with a usd amount', () => {
    renderWithStore(<Converter  useConverter={useConverterMock}/>, {state: stateMock});

    expect(screen.getByLabelText(/Сумма в долларах/))
      .toHaveValue(2.38);
  })

  it('should call the useConverter hook with a course value from the store', () => {
    renderWithStore(<Converter  useConverter={useConverterMock}/>, {state: stateMock});
    expect(mockInitialRender).toHaveBeenCalledWith(100500)
  })
})

describe('when typed in a RUB input', () => {
  it('should update its value', () => {
    renderWithStore(<Converter  useConverter={useConverterMock}/>, {state: stateMock});
    const input = screen.getByLabelText(/Сумма в рублях/);
    
    userEvent.clear(input);
    userEvent.type(input, '42'); //когда юзер пишет внутри инпута 42
    expect(mockUpdateRub).toHaveBeenCalledWith('42');
  })
})

describe('when typed in a USD input', () => {
  it('should update its value', () => {
    renderWithStore(<Converter  useConverter={useConverterMock}/>, {state: stateMock});
    const input = screen.getByLabelText(/Сумма в долларах/);
    
    userEvent.clear(input);
    userEvent.type(input, '42'); //когда юзер пишет внутри инпута 42
    expect(mockUpdateUsd).toHaveBeenCalledWith('42');
  })
})