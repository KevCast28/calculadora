// src/App.tsx
import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import InvestmentForm, { InvestmentData } from './components/Calculadora';
import Results from './components/Results';
import {
  calculateTotalReturn,
  calculateAverageCashFlow,
  calculatePaybackPeriod,
  calculateAdjustedReturn,
  calculateNetPresentValue,
  calculateInternalRateOfReturn,
} from './utils/calculos';

const App: React.FC = () => {
  const [results, setResults] = useState({
    totalReturn: 0,
    averageCashFlow: 0,
    paybackPeriod: 0,
    adjustedReturn: 0,
    netPresentValue: 0,
    internalRateOfReturn: 0,
  });

  const handleCalculate = (data: InvestmentData) => {
    const totalReturn = calculateTotalReturn(data.initialInvestment, data.cashFlows);
    const averageCashFlow = calculateAverageCashFlow(data.cashFlows);
    const paybackPeriod = calculatePaybackPeriod(data.initialInvestment, data.cashFlows);
    const adjustedReturn = calculateAdjustedReturn(totalReturn, data.inflationRate, data.cashFlows.length);
    const netPresentValue = calculateNetPresentValue(data.initialInvestment, data.cashFlows, data.discountRate);
    const internalRateOfReturn = calculateInternalRateOfReturn(data.initialInvestment, data.cashFlows);
    setResults({
      totalReturn,
      averageCashFlow,
      paybackPeriod,
      adjustedReturn,
      netPresentValue,
      internalRateOfReturn,
    });
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Calculadora de Evaluación de Inversión
      </Typography>
      <InvestmentForm onCalculate={handleCalculate} />
      <Results {...results} />
    </Container>
  );
};

export default App