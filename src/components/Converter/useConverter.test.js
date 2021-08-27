import { act, renderHook } from '@testing-library/react-hooks';
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
  // it.todo('should update rub value'); // c помощью todo мы планируем тест. с todo тест не выполняется.
  it('should update rub value', () => {
    const { result } = renderHook(() => useConverter(testRubAmount, course));

    act(() => {
      result.current.updateRub(10);
    })

    expect(result.current.rub).toEqual(10);
  });

  it('should recalculate usd value', () => {
    const { result } = renderHook(() => useConverter(testRubAmount, course));

    act(() => {
      result.current.updateRub(10);
    });

    expect(result.current.usd).toEqual(0.24);
  });
})

describe('when call an updateUSD method', () => {
  it('should update usd value', () => {
    const { result } = renderHook(() => useConverter(testRubAmount, course));

    act(() => {
      result.current.updateUsd(10);
    });

    expect(result.current.usd).toEqual(10);
  });
  it('should recalculate rub value', () => {
    const { result } = renderHook(() => useConverter(testRubAmount, course));
    act(() => {
      result.current.updateUsd(10);
    });

    expect(result.current.rub).toEqual(420);
  });
})

describe('when re-rendered', () => {
  it.todo('should update its values');
})