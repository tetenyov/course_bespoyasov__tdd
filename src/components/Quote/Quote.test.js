import { render, screen } from "@testing-library/react"
import { Quote } from "./Quote";
import { Quotes } from "./quotes";

// замокаем объект Math
// перед каждым тестом будем запускать spyOn, который будет следить за глобальным объектом Math
beforeEach(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.42) // когда кто-то спрашивает метод random верни ему 0.42
});

// после теста размокаем объект Math
afterEach(() => {
  jest.restoreAllMocks();
});

describe('when rendered', () => {  //from jest
  const { text, author } = Quotes[1];

  it('should contain an expected text', () => {  // from jest
    render(<Quote />);  //from react testing library
    // screen позволяет вз д с тем куском дерева, который рендерит render

    const result = screen.getByText(new RegExp(text));
    expect(result).toBeInTheDocument() //если найдешь result, то он должен быть внутри Document
  });

  it('should contain an expect author', () => {
    render(<Quote />);
    const result = screen.getByText(new RegExp(author));
    expect(result).toBeInTheDocument();
  })
});
