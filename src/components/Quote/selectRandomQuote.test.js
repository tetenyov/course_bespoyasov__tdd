import { selectRandomQuote } from './selectRandomQuote';
import { Quotes } from './quotes';

// замокаем объект Math
// перед каждым тестом будем запускать spyOn, который будет следить за глобальным объектом Math
beforeEach(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.42) // когда кто-то спрашивает метод random верни ему 0.42
});

// после теста размокаем объект Math
afterEach(() => {
  jest.restoreAllMocks();
});

describe('when called with a quotes list', () => {
  it('should return second (random) quote', () => {
    const result = selectRandomQuote(Quotes);
    expect(result).toEqual(Quotes[1]);
  })
})