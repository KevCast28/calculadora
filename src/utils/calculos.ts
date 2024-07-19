// src/utils/calculations.ts
export const calculateTotalReturn = (initialInvestment: number, cashFlows: number[]): number => {
  const totalCashFlow = cashFlows.reduce((acc, flow) => acc + flow, 0);
  return totalCashFlow - initialInvestment;
};

export const calculateAverageCashFlow = (cashFlows: number[]): number => {
  return cashFlows.reduce((acc, flow) => acc + flow, 0) / cashFlows.length;
};

export const calculatePaybackPeriod = (initialInvestment: number, cashFlows: number[]): number => {
  let cumulativeCashFlow = 0;
  for (let i = 0; i < cashFlows.length; i++) {
    cumulativeCashFlow += cashFlows[i];
    if (cumulativeCashFlow >= initialInvestment) {
      return i + 1;
    }
  }
  return -1; // If payback period is not achieved
};

export const calculateAdjustedReturn = (totalReturn: number, inflationRate: number, years: number): number => {
  return totalReturn / Math.pow(1 + inflationRate / 100, years);
};

export const calculateNetPresentValue = (initialInvestment: number, cashFlows: number[], discountRate: number): number => {
  let npv = -initialInvestment;
  for (let i = 0; i < cashFlows.length; i++) {
    npv += cashFlows[i] / Math.pow(1 + discountRate / 100, i + 1);
  }
  return npv;
};

export const calculateInternalRateOfReturn = (initialInvestment: number, cashFlows: number[]): number => {
  const irr = (guessRate: number) => {
    let npv = -initialInvestment;
    for (let i = 0; i < cashFlows.length; i++) {
      npv += cashFlows[i] / Math.pow(1 + guessRate, i + 1);
    }
    return npv;
  };

  let lowerBound = 0;
  let upperBound = 1;
  while (irr(upperBound) > 0) {
    lowerBound = upperBound;
    upperBound *= 2;
  }

  const tolerance = 1e-6;
  while (upperBound - lowerBound > tolerance) {
    const guessRate = (upperBound + lowerBound) / 2;
    if (irr(guessRate) > 0) {
      lowerBound = guessRate;
    } else {
      upperBound = guessRate;
    }
  }

  return ((upperBound + lowerBound) / 2) * 100;
};
