import { useState } from 'react';
import { setOriginalNode, setSyntheticTrailingComments } from 'typescript';
import { rubToUSD, usdToRub } from '../../domain/converter';

export function useConverter(initRubValue, course) {
  const calculatedUsdAmount = rubToUSD(initRubValue, course);

  const [rub, setRub] = useState(initRubValue);
  const [usd, setUsd] = useState(calculatedUsdAmount);

  const createUpdater = (direction) => {
    const isFromRub = direction === 'rub-usd';
    const convert = isFromRub ? rubToUSD : usdToRub;

    const setOriginal = isFromRub ? setRub : setUsd;
    const setTarget = isFromRub ? setUsd : setRub;

    return function update(value) {
      const original = Number(value);
      const target = convert(original, course);

      setOriginal(original);
      setTarget(target)
    }
  }

  const updateRub = createUpdater('rub-usd');
  const updateUsd = createUpdater('usd-rub');

  return {
    rub,
    usd,
    updateRub,
    updateUsd
  };
};