// src/components/InvestmentForm.tsx
import React, { useState } from 'react';
import { TextField, Button, Container, Grid } from '@mui/material';

interface InvestmentFormProps {
    onCalculate: (data: InvestmentData) => void;
}

export interface InvestmentData {
    initialInvestment: number;
    cashFlows: number[];
    inflationRate: number;
    discountRate: number;
}

const InvestmentForm: React.FC<InvestmentFormProps> = ({ onCalculate }) => {
    const [initialInvestment, setInitialInvestment] = useState<number>(0);
    const [cashFlows, setCashFlows] = useState<string>('');
    const [inflationRate, setInflationRate] = useState<number>(0);
    const [discountRate, setDiscountRate] = useState<number>(0);

    const handleCalculate = () => {
        const cashFlowArray = cashFlows.split(',').map(Number);
        const data: InvestmentData = {
            initialInvestment,
            cashFlows: cashFlowArray,
            inflationRate,
            discountRate,
        };
        onCalculate(data);
    };

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Inversión Inicial"
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={initialInvestment}
                        onChange={(e) => setInitialInvestment(Number(e.target.value))}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Flujos de Efectivo (separados por comas)"
                        variant="outlined"
                        fullWidth
                        value={cashFlows}
                        onChange={(e) => setCashFlows(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Tasa de Inflación (%)"
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={inflationRate}
                        onChange={(e) => setInflationRate(Number(e.target.value))}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Tasa de Descuento (%)"
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={discountRate}
                        onChange={(e) => setDiscountRate(Number(e.target.value))}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth onClick={handleCalculate}>
                        Calcular
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default InvestmentForm;