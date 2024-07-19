// src/components/Results.tsx
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';

interface ResultsProps {
    totalReturn: number;
    averageCashFlow: number;
    paybackPeriod: number;
    adjustedReturn: number;
    netPresentValue: number;
    internalRateOfReturn: number;
}

const Results: React.FC<ResultsProps> = ({
    totalReturn,
    averageCashFlow,
    paybackPeriod,
    adjustedReturn,
    netPresentValue,
    internalRateOfReturn,
}) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6">Resultados de la Inversión</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>Rentabilidad Total: {totalReturn.toFixed(2)}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>Rentabilidad de Flujo Medio: {averageCashFlow.toFixed(2)}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>Periodo de Retorno de Inversión (Payback): {paybackPeriod.toFixed(2)} años</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>Rentabilidad Ajustada por Inflación: {adjustedReturn.toFixed(2)}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>Valor Presente Neto (VPN): {netPresentValue.toFixed(2)}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>Tasa Interna de Retorno (TIR): {internalRateOfReturn.toFixed(2)}%</Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Results;
