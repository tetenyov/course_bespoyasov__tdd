import { renderHook } from '@testing-library/react-hooks';
import { useConverter } from './useConverter';

const course = 42;
const testRubAmount = 100;
const calculatedUsdAmount = 2.38;

describe('when rendered', () => {
  it('rub value should be equal to initial rub amount', () => {
    const { result } = renderHook(() => useConverter(testRubAmount, course));

    expect(result.current.rub).toEqual(testRubAmount)
  });

  it('usd value should be equal to initial usd amount', () => {
    const { result } = renderHook(() => useConverter(testRubAmount, course));
    expect(result.current.usd).toEqual(calculatedUsdAmount)
  });
});

describe('when call an updateRub method', () => {
  it.todo('should update rub value');
  it.todo('should recalculate usd value');
})

describe('when call an updateUSD method', () => {
  it.todo('should update usd value');
  it.todo('should recalculate rub value');
})

describe('when re-rendered', () => {
  it.todo('should update its values');
})