import { useState } from 'react';
import { rubToUSD } from '../../domain/converter';

export function useConverter(initRubValue, course) {
  const calculatedUsdAmount = rubToUSD(initRubValue, course);

  const [rub, setRub] = useState(initRubValue);
  const [usd, setUsd] = useState(calculatedUsdAmount);

  return {
    rub,
    usd,
    updateRub: setRub,
    updateUsd: setUsd
  }
};