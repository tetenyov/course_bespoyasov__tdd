import { useState } from 'react';
import { rubToUSD, usdToRub } from '../../domain/converter';

export function useConverter(initRubValue, course) {
  const calculatedUsdAmount = rubToUSD(initRubValue, course);

  const [rub, setRub] = useState(initRubValue);
  const [usd, setUsd] = useState(calculatedUsdAmount);

  const updateRub = (value) => {
    const rub = Number(value);
    const usd = rubToUSD(rub, course);

    setRub(rub);
    setUsd(usd);
  };

  const updateUsd = (value) => {
    const usd = Number(value);
    const rub = usdToRub(usd, course);

    setRub(rub);
    setUsd(usd);
  };

  return {
    rub,
    usd,
    updateRub,
    updateUsd
  };
};