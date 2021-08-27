import { rubToUSD, usdToRub } from "./converter"

describe('when convert rubles to usd', () =>  {
  it('should return correct converted amount', () => {
    const result = rubToUSD(10, 50);

    expect(result).toEqual(0.2);
  })
})

describe('when convert usd to rubles', () =>  {
  it('should return correct converted amount', () => {
    const testCases = [
      {usd: 10, course: 50, rub: 500},
      {usd: 10, course: 1.5, rub: 15},
      {usd: 10, course: 3.1415926, rub: 31.42},
    ]

    testCases.forEach(({ usd, course, rub }) => {
      const result = usdToRub(usd, course);
      expect(result).toEqual(rub);

    })
  })
})